class ModuleNode {
  constructor(module) {
    this.id = module.id;
    this.type = module.type;
    this.moduleType = module.moduleType;
    this.size = module.size;
    this.name = module.name;
    this.chunks = module.chunks;
    this.profile = module.profile;
    this.identifier = module.identifier;
    this.issuerId = module.issuerId;
    this.edges = new Set(); // Store outgoing edges
  }

  addEdge(targetNode) {
    this.edges.add(targetNode);
  }
}

class ModuleGraph {
  constructor() {
    this.nodes = new Map(); // Store nodes by id
    this.rootNodes = new Set(); // Store entry points (nodes with issuerId = null)
  }

  addNode(module) {
    const id = module.id || module.identifier; // Use identifier as fallback if id is null
    if (!this.nodes.has(id)) {
      const node = new ModuleNode(module);
      this.nodes.set(id, node);
      
      // If issuerId is null, this is a root/entry node
      if (module.issuerId === null) {
        this.rootNodes.add(node);
      }
    }
    return this.nodes.get(id);
  }

  buildFromStats(modules) {
    // First pass: Create all nodes
    modules.forEach(module => {
      this.addNode(module);
    });

    // Second pass: Create edges based on issuerId relationships
    modules.forEach(module => {
      const currentId = module.id || module.identifier;
      const sourceNode = this.nodes.get(currentId);
      
      if (module.issuerId) {
        const targetNode = this.nodes.get(module.issuerId);
        if (targetNode) {
          // Create edge from issuer to current module
          targetNode.addEdge(sourceNode);
        }
      }
    });
  }

  // Get direct dependencies (children) of a module
  getDependencies(moduleId) {
    const node = this.nodes.get(moduleId);
    if (!node) return new Set();
    return node.edges;
  }

  // Get module information
  getModuleInfo(moduleId) {
    return this.nodes.get(moduleId);
  }

  // Get all entry points (root nodes)
  getRootNodes() {
    return this.rootNodes;
  }

  // Get a visual representation of the graph
  toString() {
    let result = '';
    
    // First print root nodes
    result += '=== Entry Points ===\n';
    this.rootNodes.forEach(node => {
      result += `Entry: ${node.name} (${node.id})\n`;
    });
    result += '\n';

    // Then print all module relationships
    result += '=== Module Dependencies ===\n';
    this.nodes.forEach(node => {
      result += `Module: ${node.name} (${node.id})\n`;
      if (node.edges.size > 0) {
        result += `Dependencies:\n`;
        node.edges.forEach(edge => {
          result += `  -> ${edge.name} (${edge.id})\n`;
        });
      }
      result += '\n';
    });
    return result;
  }

  // Get all modules that depend on a given module
  getDependents(moduleId) {
    const dependents = new Set();
    
    this.nodes.forEach(node => {
      node.edges.forEach(edge => {
        if (edge.id === moduleId) {
          dependents.add(node);
        }
      });
    });

    return dependents;
  }

  // Convert the module graph to a simple DAG representation
  toDAG() {
    const dag = {
      nodes: [],
      edges: []
    };

    // Add all nodes first
    this.nodes.forEach(node => {
      dag.nodes.push({
        id: node.id,
        name: node.name,
        size: node.size,
        moduleType: node.moduleType
      });

      // Add edges
      node.edges.forEach(targetNode => {
        dag.edges.push({
          source: node.id,
          target: targetNode.id
        });
      });
    });

    return dag;
  }
}

// Example usage:
function createModuleGraph(statsData) {
  const graph = new ModuleGraph();
  graph.buildFromStats(statsData.modules);
  return graph;
}

module.exports = {
  ModuleGraph,
  createModuleGraph 
};
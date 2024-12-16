class ModuleNode {
  constructor(module) {
    this.id = module.id;
    // this.type = module.type;
    // this.moduleType = module.moduleType;
    // this.size = module.size;
    this.name = module.name;
    this.chunks = module.chunks;
    this.profile = module.profile;
    this.value = mudule.profile.total;
    // this.identifier = module.identifier;
    // this.issuerId = module.issuerId;
    this.children = new Array(); // Store outgoing edges
  }

  addChildrenNode(targetNode) {
    this.children.push(targetNode);
  }
}

class ModuleGraph {
  constructor() {
    this.nodes = new Map(); // Store nodes by id
    this.rootNodes = {}; // Store entry points (nodes with issuerId = null)
  }

  addNode(module) {
    const id = module.id || module.identifier; // Use identifier as fallback if id is null
    if (!this.nodes.has(id)) {
      const node = new ModuleNode(module);
      // this.nodes.set(id, node);

      // If issuerId is null, this is a root/entry node
      if (module.issuerId === null && module.profile.total > 0) {
        this.nodes.set(id, node);
        this.rootNodes = node;
      }
    }
    // return this.nodes.get(id);
  }

  buildFromModules(modules) {
    modules.forEach(module => {
      this.addNode(module);
    });

    // Second pass: Create edges based on issuerId relationships
    modules.forEach(module => {
      const id = module.id || module.identifier;
      const issuerId = module.issuerId;
      const sourceNode = this.nodes.get(issuerId);

      if (module.issuerId) {
        // const targetNode = this.nodes.get(currentId);
        const node = new ModuleNode(module);
        if (sourceNode && module.profile.total > 0) {
          // Create edge from issuer to current module
          sourceNode.addChildrenNode(node);
          this.nodes.set(id, sourceNode);
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

}

// Example usage:
function createModuleGraph(modules) {
  const graph = new ModuleGraph();
  graph.buildFromModules(modules);
  return graph;
}

module.exports = {
  ModuleGraph,
  createModuleGraph
};
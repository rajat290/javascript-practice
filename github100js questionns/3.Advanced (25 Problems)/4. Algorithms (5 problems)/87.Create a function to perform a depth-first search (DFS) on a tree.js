// Create a function to perform a depth-first search (DFS) on a tree.

function dfs(node) {
    if (!node) return;
    console.log(node.value);
    node.children.forEach(child => dfs(child));
}
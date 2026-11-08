function makeNestedTree(items) {
    const map = {};
    const rootItems = [];

    // Step 1: copy every item and give it a fresh children array
    items.forEach(item => {
        map[item.id] = { ...item, children: [] };
    });

    // Step 2: attach each item to its parent
    items.forEach(item => {
        if (item.parentId === null) {
            rootItems.push(map[item.id]);
        } else if (map[item.parentId]) {
            map[item.parentId].children.push(map[item.id]);
        }
    });

    return rootItems;
}

console.log(makeNestedTree(items));
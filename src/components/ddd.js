getAllItemsPerChildren(item) {
    this.arrayfromTree.push(item);
    if (item.children) {
        return item.children.map(i => this.getAllItemsPerChildren(i));
    }
},
uniqueArray(array, key) {
    let seen = new Set();
    return array.filter(item => {
        let k = key(item);
        return seen.has(k) ? false : seen.add(k);
    });
},
uniqueNameArray() {
    this.unique = this.uniqueArray(this.arrayfromTree, it => it.name);
    this.unique.map(item => {
        this.uniqueName.push(item.name);
    })
},

prepareODepartmentsForShow(o, initialLevel) {
    let level = initialLevel;
    if (level == 0) o.id = 0;
    o.level = level;
    level += 1;
    // o.children = o.subdivision;
    if (o.children.length !== 0) {
        o.hasChildren = true;
        for (let child in o.children) {
            o.children[child].level = level;
            o.children[child].parent = o;
            o.children[child].showByFilter = false;
            this.prepareODepartmentsForShow(o.children[child], level);
        }
    } else {
        o.hasChildren = false;
    }
    this.$forceUpdate();
},
showParent(level, parent) {
    if (level <= 0 || parent.show_children) return;
    parent.show_children = true;
    level--;
    this.showParent(level, parent.parent);
},
setShowedChildren(object, value) {
    // if (object.name == value) {
    //     this.showedLevel = object.level;
    //     object.showByFilter = true;
    // }
    if (object.children) {
        for (let child in object.children) {
            if (object.children[child].name == value) {
                this.showedLevel = object.children[child].level;
                this.showParent(this.showedLevel, object.children[child].parent);
                object.children[child].showByFilter = true;
            }
            this.setShowedChildren(object.children[child], value);
        }
    }
},

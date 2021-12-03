
 sortable(".sortable-td-item", {
    forcePlaceholderSize: false,
    copy: false,
    acceptFrom: ".sortable-td-item,.sort-vertical-items",
    placeholderClass: "mb1 bg-navy border border-yellow",
    orientation: 'horizontal',
    maxItems: 1,
  });
  sortable(".sort-vertical-items", {
    forcePlaceholderSize: false,
    copy: false,
    acceptFrom: ".sort-vertical-items,.sortable-td-item",
    placeholderClass: "mb1 border border-maroon",
    maxItems: 1,
    orientation: 'horizontal'
  });

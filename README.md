# Project-management-TPL

hello sir,
our all code is correct, only one change in case-sensitive.pipe.ts file, 
in that I haven't used specific column name for search.

before:  return item.includes(searchText)
after change: return item.ptheme.includes(searchText)
    ptheme is a column name
.
.
here is the function in case-sensitive.pipe.ts

transform(items: any[], searchText: string='') {

    if (!items) return [];
    if (!searchText || searchText === '') return items;
    return items.filter(item => {
        return item.ptheme.includes(searchText) ;
    });

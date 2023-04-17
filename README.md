# Project-management-TPL

hello sir, <br>
our all code is correct, only one change in case-sensitive.pipe.ts file, <br>
in that I haven't used specific column name for search. <br>

before:  return item.includes(searchText)<br>
after change: return item.ptheme.includes(searchText)<br>
    ptheme is a column name<br><br>
here is the function in case-sensitive.pipe.ts<br>

    transform(items: any[], searchText: string=''){
        if (!items) return [];
        if (!searchText || searchText === '') return items;
        return items.filter(item => {
            return item.ptheme.includes(searchText) ;
     });

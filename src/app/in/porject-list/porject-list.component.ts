import { Component, OnInit, Pipe, PipeTransform  } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CaseSensitivePipe } from './case-sensitive.pipe';

@Component({
  selector: 'app-porject-list',
  templateUrl: './porject-list.component.html',
  styleUrls: ['./porject-list.component.css'],
  providers: [CaseSensitivePipe]

})
export class PorjectListComponent implements OnInit {

  data:any;
  searchText: any;

  constructor(private api:ApiService) {

   }
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchProject();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchProject();
  }

  ngOnInit(): void {
   this.fetchProject();
  }
  fetchProject(){
    this.api.projectList().subscribe((res):any=>{
      this.data=res;
    })
  }
  status:any;
  changeStatus(ind:any,state:any){
    console.log(ind,state);
    var  data1={
      "pStatus":state
    }
    this.api.changeStatus(ind,data1).subscribe(res=>{

        this.fetchProject();

    })
  }

  columnNames = ['Priority', 'pStatus', 'Start Date'];

  selectedColumn = 'pPriority';

  sortTableData() {
    this.data.sort((a:any, b:any) => {
      if (a[this.selectedColumn] < b[this.selectedColumn]) return -1;
      if (a[this.selectedColumn] > b[this.selectedColumn]) return 1;
      return 0;
    });
  }

}

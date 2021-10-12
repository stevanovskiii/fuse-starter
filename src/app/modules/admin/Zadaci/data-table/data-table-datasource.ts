import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  ID: string;
  Client: string;
  ProjectName: string;
  TaskName: string;
  Starts: string;
  Ends: string;
  Categories: string;
  Status: string;
  Priority: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DataTableItem[] = [
  {ID: '0',Client: 'клиент 1', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '1',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '2',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '3',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '4',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '5',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '6',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '7',Client: '/', ProjectName: 'redizajn  ova e podlogo za da se vidi kako rabotat kopcianta', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '8',Client: '/', ProjectName: 'redizajn gornovo bese grdo za da bidi najgore', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '9',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '10',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
  {ID: '11',Client: '/', ProjectName: 'redizajn', TaskName: 'redizajn', Starts: '26-07-2021', Ends: '08-02-2021', Categories: 'softver', Status: 'se izvrsuva', Priority: 'normalen',},
]

const EXAMPLE_DATA2: DataTableItem[] =  [
  {ID: '0', Client: '/', ProjectName: '/', TaskName: '/', Starts: '/', Ends: '/', Categories: '/', Status: '/', Priority: '/',},
]

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA2;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor(responseData:any) {
    super();
    //console.log('eve kolku e this.data vo construcotort na data-soruce')
    //console.log(this.data)
    //console.log('eve kolku e this.data vo construcotort na data-soruce')
    this.responseData=responseData
    //console.log('Eve jas vo datasource sto dobiv')
    //console.log(responseData)
    //console.log('Eve jas vo datasource sto dobiv')

    
    this.stavigiPodatociteOdGetot(responseData)
    //console.log('JAS SUM OD DATATABLE SOURCE')
    //console.log(this.responseRows)
    //console.log(this.data)
    //console.log('JAS SUM OD DATATABLE SOURCE')
  }

  responseData:any
  responseRows:any

  stavigiPodatociteOdGetot(responseData){
    this.responseRows=responseData.ProjectTasks

    //console.log('eve kolku e this.data pred for-ot')
    this.data.splice(0)//E OVA SVRSI CELA RABOTA
    //console.log(this.data)
    //console.log('eve kolku e this.data pred for-ot')


    //console.log('eve kolku e this.responseRows.length')
    //console.log(this.responseRows.length)
    //console.log(this.responseRows)
    //console.log('eve kolku e this.responseRows.length')

    for(var i=0;i<this.responseRows.length;i++){
      this.data[i]={ID: i.toString(), Client: this.responseRows[i].Customer, ProjectName: this.responseRows[i].ProjectName, TaskName: this.responseRows[i].Name, Starts: this.responseRows[i].StartDate, Ends: this.responseRows[i].EndDate, Categories: this.responseRows[i].TaskCategory, Status: this.responseRows[i].Status, Priority: this.responseRows[i].Priority};
    }

    //console.log('eve na sto e data vo datasource ednakvo vo funkcijata')
    //console.log(this.data)
    //console.log('eve na sto e data vo datasource ednakvo vo funkcijata')
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]): DataTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]): DataTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'ID': return compare(a.ID, b.ID, isAsc);
        case 'Client': return compare(a.Client, b.Client, isAsc);
        case 'ProjectName': return compare(+a.ProjectName, +b.ProjectName, isAsc);
        case 'TaskName': return compare(a.TaskName, b.TaskName, isAsc);
        case 'Starts': return compare(+a.Starts, +b.Starts, isAsc);
        case 'Ends': return compare(a.Ends, b.Ends, isAsc);
        case 'Categories': return compare(+a.Categories, +b.Categories, isAsc);
        case 'Status': return compare(a.Status, b.Status, isAsc);
        case 'Priority': return compare(+a.Priority, +b.Priority, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

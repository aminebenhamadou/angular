import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ArticleService } from 'src/Services/article.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog'; // Importer MatDialog

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<any>(this.MS.tab)
  constructor(private MS: ArticleService, private dialog: MatDialog) { // Injecter MatDialog
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    
  }
  
  displayedColumns: string[] = ['1', '2', '3', '4','5'];
  
  delete (id:string):void {
    //appeler la fct de service ONDELTE ()
  
    //lancer la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '400px',
      width: '600px',
    });
    //attendre le resultat de l'outil
    dialogRef.afterClosed().subscribe(result =>{
      if (result) 
      this.MS.deleteArticleById(id).then(()=>{
        this.dataSource.data= this.MS.tab})
    });
    //if confirl
     // le composant joue le role de subsciber w mch nhot eli baathou l observer.next baathvide houni 5ater any
  }
}  
import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/Modeles/Member';
import { MemberService } from 'src/Services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent {
nom = 'amine'
displayedColumns: string[] = ['1', '2', '3', '4','5','6','7'];
constructor (private MS:MemberService,private dialog:MatDialog){} //injection de depandece nesnaa instance privéé nestaaml les att w methodes mtaa heka service

dataSource = new MatTableDataSource(this.MS.tab)
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
    this.MS.ONDELETE(id).subscribe(()=>{
      this.dataSource.data= this.MS.tab})
  });
  //if confirl
   // le composant joue le role de subsciber w mch nhot eli baathou l observer.next baathvide houni 5ater any
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}

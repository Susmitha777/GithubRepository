import { Component, OnInit } from '@angular/core';
import { Repository } from '../classes/repository';
import { GitRepoService } from '../git-repo.service';


@Component({
  selector: 'app-git-hub-repo-list',
  templateUrl: './git-hub-repo-list.component.html',
  styleUrls: ['./git-hub-repo-list.component.css']
})
export class GitHubRepoListComponent implements OnInit {

  public getRepoList:string;
  datas: any;
  gitRepoData;

  constructor(private githubRepoService:GitRepoService ) { }

  ngOnInit() {
  //this.getFilterData();
}
getFilterData(){

  this.githubRepoService.getRepos().subscribe( list => {
  this.gitRepoData=list;
   
  });  
  
}


}

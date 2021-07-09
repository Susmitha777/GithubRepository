import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubRepoListComponent } from './git-hub-repo-list.component';

describe('GitHubRepoListComponent', () => {
  let component: GitHubRepoListComponent;
  let fixture: ComponentFixture<GitHubRepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubRepoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

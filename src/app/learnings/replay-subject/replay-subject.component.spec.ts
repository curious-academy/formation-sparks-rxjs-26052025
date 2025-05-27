import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectComponent } from './replay-subject.component';
import { TestScheduler } from 'rxjs/testing';
import { map, of } from 'rxjs';

const scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

describe('ReplaySubjectComponent', () => {
  let component: ReplaySubjectComponent;
  let fixture: ComponentFixture<ReplaySubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run map', () => {
    scheduler.run(({cold, expectObservable}) => {
      const source$ = cold('-a--b--|')
      const expected = '-x--y--|'

      const results= source$.pipe(
        map(y => y.toUpperCase())
      )

      expectObservable(results).toBe(expected, {x: 'A', y: 'B' })
    })
  })
});

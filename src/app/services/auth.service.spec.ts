import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, of } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { Actor } from '../models/actor.model';

describe('AuthService', () => {
  let service: AuthService;

  const authState = of({
    displayName: 'Jhon Doe',
    isAnonymous: true,
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2',
  });

  const mockAngularFireAuth: any = {
    auth: jasmine.createSpyObj('auth', {
      signInWithEmailAndPassword: Promise.resolve({}),
      createUserWithEmailAndPassword: Promise.resolve({}),
      signOut: Promise.resolve({}),
    }),
    authState: authState,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: AngularFireAuth, useValue: mockAngularFireAuth }],
      teardown: { destroyAfterEach: false },
    });
    service = TestBed.inject(AuthService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Login', () => {
    it('should call [signInWithEmailAndPassword]', () => {
      service.login('email', 'password');
      expect(
        mockAngularFireAuth.auth.signInWithEmailAndPassword
      ).toHaveBeenCalled();
    });
  });

  describe('Logout', () => {
    it('should call [signOut]', () => {
      service.logout();
      expect(mockAngularFireAuth.auth.signOut).toHaveBeenCalled();
    });
  });

  describe('Register', () => {
    it('should call [createUserWithEmailAndPassword]', () => {
      service.registerUser(new Actor());
      expect(
        mockAngularFireAuth.auth.createUserWithEmailAndPassword
      ).toHaveBeenCalled();
    });
  });
});

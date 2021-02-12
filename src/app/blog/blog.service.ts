import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogCollection?: AngularFirestoreCollection<Blog>
  blogDoc?: AngularFirestoreDocument<Blog>

  constructor(private afs: AngularFirestore) { }
}

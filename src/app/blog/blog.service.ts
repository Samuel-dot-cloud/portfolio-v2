import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Blog } from './blog';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogCollection?: AngularFirestoreCollection<Blog>
  blogDoc?: AngularFirestoreDocument<Blog>

  constructor(private afs: AngularFirestore) {
    this.blogCollection = this.afs.collection('Posts', ref =>
      ref.orderBy('published', 'desc'))
  }

  getPosts() {
    return this.blogCollection?.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Blog
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })
  }

  getPostData(id: string) {
    this.blogDoc = this.afs.doc<Blog>(`Posts/${id}`)
    return this.blogDoc.valueChanges()
  }

  createPost(data: Blog) {
    this.blogCollection?.add(data)
  }

  getPost(id: string) {
    return this.afs.doc<Blog>(`Posts/${id}`)
  }

  deletePost(id: string) {
    return this.getPost(id).delete()
  }

  updatePost(id: string, formData: any) {
    return this.getPost(id).update(formData)
  }
}

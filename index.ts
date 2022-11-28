import { Observable, Subject } from 'rxjs';

const observable = new Observable<string>((subscriber) => {
  subscriber.next('1');
  subscriber.next('2');
  subscriber.next(Math.random().toString());
});

//burada aşağıdaki kodu çalıştırdığımızda observable nesnesinin farklı kopyalarını kullanmış oluruz
//observable içerisinde her çalıştırmada farklı bir çalışma alanı üzerinde run işlemi yapılır
//(datalar farklı anlarda üretilir)
observable.subscribe((data) => console.log('observable 1: ' + data));
observable.subscribe((data) => console.log('observable 2: ' + data));

const subject = new Subject<number>();

//subject içerisinde ise her çalıştırmada aynı çalışma alanı içerisinde çalışarak akış içerisine eklenir
//yani multicasted işlem yapar (datalar aynı anda üretilir)
subject.subscribe((data) => console.log('subject 1:' + data));
subject.subscribe((data) => console.log('subject 2:' + data));

subject.next(1);
subject.next(2);
subject.next(Math.random());

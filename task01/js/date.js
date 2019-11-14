var dateFrom = "02/06/2013";
var dateTo = "02/09/2013";

var d1 = dateFrom.split("/");
var d2 = dateTo.split("/");

var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]); 



var dates= ["02/06/2013", "02/07/2013", "02/08/2013", "02/09/2013", "02/07/2013", "02/10/2013", "02/011/2013"];

dates.forEach(element => {
   let parts = element.split("/");
   let date= new Date(parts[2], parseInt(parts[1]) - 1, parts[0]);
        if (date >= from && date < to) {
           console.log('dates in range', date);
        }
})

public class Student {
   String rollNo;
   String fullname;

   public Student (String rollNo, String fullname){
      this.rollNo = rollNo;
      this.fullname = fullname;
   }
}

HashMap<String, Student> studentList = new HashMap<>();
Student std = new Student("MS01", "Truong van hau");
studentList.pust(std.rollNo,std);

Student std = new Student("MS02", "Truong van phuong");
studentList.pust(std.rollNo,std);

Student std2 = studentList.get("MS01");
// Duyet xem co bao nhieu key trong HashMap
Set<String> keys = map.keySet();
keys.forEach((key) -> {
   System.out.println("key : " + key);
});

import java.util.ArrayList;

public class Controller<E>{
   ArrayList<E> list = new ArrayList<>();
   publish Controller(){
   }
   publish void addEventListener(E e){
      list.add(e);
   }
   publish E get(int index){
      return list.get(index);
   }
}

Controller<String> controller = new Controller<>();
controller.add("A");


publish class Peple {
   publish String fullname;
}

public class Student extends Peple{
   String rollNo;
   //String fullname;

   public Student (String ro  llNo, String fullname){
      this.rollNo = rollNo;
      this.fullname = fullname;
   }
}

public class Controller<E extends People>{
   ArrayList<E> list = new ArrayList<>();
   publish Controller(){
   }
   publish void addEventListener(E e){
      list.add(e);
   }
   publish E get(int index){
      return list.get(index);
   }
}
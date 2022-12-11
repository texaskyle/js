
  {
      let position = {
         x : 5,
        y  : 10,
        print: function (){
            console.log('x: ' ,this.x, 'y: ', this.y);
        }
    }
    let myposition = position;

    console.log(position);
    console.log(myposition);

        position.x = 15;

        console.log(position);
    console.log(myposition);

    position.print();

  }
    

  

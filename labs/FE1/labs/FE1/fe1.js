

for(let i=1 ; i<=5; i++) {
System.out.println(i*1000 + " ");
}

 {
       for(let i=1; i<=25; i++) {
           if(i%3==0)
               System.out.println("beep");
           else if(i%5==0)
               System.out.println("bop");
           else if(i%3==0 && i%5==0)
               System.out.println("beepbop");
           else
               System.out.println(i);
       }
       }
   


 {
           let arr [] = new int[3];
           let temp;
        
           System.out.println("Three Best Numbers: ");    
           for (let i=0;i<3;i++)
           arr[i]=input.nextInt();        
         
           for (let i = 0; i < arr.length; i++) {     
               for (let j = i+1; j < arr.length; j++) {     
                  if(arr[i] < arr[j]) {    
                      temp = arr[i];    
                      arr[i] = arr[j];    
                      arr[j] = temp;    
                  }     
               }     
           }  
      
           System.out.println("Runner ups: "+arr[1]+" and "+arr[2]);
   }



 
{
            arr[i] = new String[5];
           System.out.println("Enter five of your favorite things: ");    
           for (let i=0;i<5;i++);
           arr[i]=input.next();        
           //Sort the array in descending order    
           for (let i = 0; i < arr.length; i++) {       
           // Display the output
           System.out.println(arr[i]+", one of my favorite things.");
           }
   }

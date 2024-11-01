import logo from './logo.svg';
import './App.css';

function App() {

  let charactersOfMB = ["Arjuna","Balaraama","Bhima","Aswatthaama","Brahma","Draupadi","Duryodhana",
    "Gandhaari","Krishna","Naarada","Sahadeva","Subhadra","Vasudeva","Urvasi","Yasoda","Yudhishthira","Pratipa"]
  return (
    <div className="App">
      <h1>Array properties and Methods</h1>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB.length);
        for(let i = 0; i < charactersOfMB.length; i++){
          console.log(charactersOfMB.at(i));
        }

      }}>Length</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        console.log(charactersOfMB.toString());
        console.log(charactersOfMB.join(" | "));
        
      }}>toString</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        delete charactersOfMB[8];
        console.log(charactersOfMB);
        
      }}>Delete</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        charactersOfMB.pop();
        console.log(charactersOfMB);
        
      }}>pop</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        charactersOfMB.shift();
        console.log(charactersOfMB);
        
      }}>shift</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        charactersOfMB.push("parikshith");
        console.log(charactersOfMB);
        
      }}>push</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        charactersOfMB.unshift("janamjeya");
        console.log(charactersOfMB);
        
      }}>unshift</button>
      <button type="button" onClick={()=>{
        console.log(charactersOfMB);
        charactersOfMB.splice(charactersOfMB.length,0,"Sakuni","Madri","Shiva")
        console.log(charactersOfMB);
        
      }}>splice</button>
      <button type="button" onClick={()=>{
        let vegetables = ["Tomato","Beetroot","carrot"];
        let fruits = ["Mango","Pineapple","Apple"];

        let treeProducts = vegetables.concat(fruits);

        let treeProducts2 = [...vegetables, ...fruits];
        console.log(vegetables);
        console.log(fruits);
        console.log(treeProducts);
        console.log(treeProducts2);

        
      }}>concat</button>
      <button type="button" onClick={()=>{
        let bollywoodActors = [["Sharukh","Gauri"], ["Hrithik","susanne"], "Salman"];
        let tollywoodActors = ["Prabhas", "Nani", "pawan Kalyan"];
        let sandalwoodActors = ["Punneth", "Yash", "Sudeep"];

        let actors = [bollywoodActors, tollywoodActors, sandalwoodActors];
        let actors2 = actors.flat(2);
        console.log(actors);
        console.log(actors2);
        
      }}>flat</button>
      <button type="button" onClick={()=>{
       let slicedArr = charactersOfMB.slice(5,11);

       console.log(charactersOfMB);

       console.log(slicedArr);

        
      }}>slice</button>
      <button type="button" onClick={()=>{
        let newArr = charactersOfMB.fill("Krish",5,11);
        console.log(newArr);
        
      }}>fill</button>
      <button type="button" onClick={()=>{

        console.log(charactersOfMB.includes("Rama"));
        
      }}>includes</button>
      <button type="button" onClick={()=>{
         console.log(charactersOfMB.indexOf
          ("Rama"));
          console.log(charactersOfMB.indexOf("Krishna"));
        
      }}>indexOf</button>
      <button type="button" onClick={()=>{

        console.log(charactersOfMB);
        charactersOfMB.reverse();
        console.log(charactersOfMB);
        
      }}>reverse</button>
      <button type="button" onClick={()=>{
        console.log(Array.isArray("abc"));
        console.log(Array.isArray(true));
        console.log(Array.isArray(123));
        console.log(Array.isArray([1,2,5]));
        
      }}>isArray</button>
      <button type="button" onClick={()=>{
        charactersOfMB.forEach((ele, i)=>{
          console.log(`${i}---->${ele}`);
        })
        
      }}>forEach</button>
      <button type="button" onClick={()=>{
        
      }}></button>
      
      <button type="button" onClick={()=>{
        
      }}></button>
      
      <button type="button" onClick={()=>{
        
      }}></button>
      
      <button type="button" onClick={()=>{
        
      }}></button>
      
      <button type="button" onClick={()=>{
        
      }}></button>
      
      <button type="button" onClick={()=>{
        
      }}></button>
      
      
    </div>
  );
}

export default App;

const msg=document.querySelector('.msg');
const GUESS=document.querySelector('input');
const btn=document.querySelector('.btn');
let play=false;
let newWords="";
let randWords="";
let sWords=['MUMBAI','SURAT','JAIPUR','INDORE','BHOPAL','PATNA','LUDHIANA','GHAZIABAD','MEERUT','RAJKOT','VARANASI','AMRITSAR','RANCHI','GWALIOR','JODHPUR','MADURAI','RAIPUR','KOTA','GUWAHATI','ALIGARH','JALANDHAR','BHIWANDI','SAHARANPUR','GORAKHPUR','BIKANER','NOIDA','JAMSHEDPUR','KOCHI','DEHRADUN','AJMER','UJJAIN','JHANSI','ULHASNAGAR','MANGALORE','GAYA','JALGAON','UDAIPUR'];
const createNewWords=()=>{
        let ranNum=Math.floor(Math.random()*sWords.length);
        //console.log(ranNum);
        let newTempSwords =sWords[ranNum];
        console.log(newTempSwords.split(""));
        return newTempSwords;
}
const scrambleWords=(arr) =>{
        for(let i= arr.length-1;i>0;i--){
            let temp=arr[i];
            // console.log(temp);
            let j= Math.floor(Math.random()*(i+1));
            // console.log(i);
            // console.log(j);
            arr[i]=arr[j];
            arr[j]=temp;

        }
        return arr;
}
btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML="GUESS";
        GUESS.classList.toggle('hidden');
        newWords=createNewWords();
        randWords=scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.innerHTML = `GUESS THE CITY: ${randWords}`;
    }
    else{
        let tempWord=GUESS.value;
        if(tempWord===newWords){
            console.log("CORRECT");
            play=false;
            msg.innerHTML=`CONGRATS, IT'S CORRECT`;
            btn.innerHTML=`PLAY AGAIN`;
            GUESS.classList.toggle('hidden');
            GUESS.value="";
        }
        else{
            console.log("INCORRECT");
            msg.innerHTML=`SORRY, IT'S INCORRECT. PLEASE TRY AGAIN. CITY:  ${randWords}`;
        }
    }
})
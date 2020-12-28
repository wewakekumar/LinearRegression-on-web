console.log("Hello");
const model=tf.sequential();
model.add(tf.layers.dense({units: 1,inputShape: [1]}));
model.compile({loss:'meanSquaredError',optimizer:'sgd'});
let x=tf.tensor2d([1,2,3,4],[4,1],'int32');
let y=tf.tensor2d([3,5,7,9],[4,1],'int32');
model.fit(x,y,{epochs:500}).then(()=>{
    document.getElementById('mybutton').addEventListener('click',(el,ev)=>{
        let val=document.getElementById('myinput').value;
        let pre=parseInt(val);
        let res=model.predict(tf.tensor2d([pre],[1,1]));
        const values = res.dataSync();
        let res2=Array.from(values);
        document.getElementById('result').innerText="Result :- "+res2;
    })
});

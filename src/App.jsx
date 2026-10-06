import { useState } from "react";
function App() {
  const [totalBill, setTotalBill] = useState(15000);
  const [members, setMembers] = useState([{id:1,name:"Bhai 1 (Ground)",units:150},{id:2,name:"Bhai 2 (AC wala)",units:250}]);
  const [n, setN] = useState(""); const [u, setU] = useState("");
  const totalUnits = members.reduce((s,m)=>s+Number(m.units),0);
  const rate = totalUnits ? totalBill/totalUnits : 0;
  return (
    <div style={{background:"#f0f9ff",minHeight:"100vh",padding:"15px",fontFamily:"system-ui",display:"flex",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"480px",background:"white",padding:"20px",borderRadius:"24px",boxShadow:"0 10px 30px #0001"}}>
        <h1 style={{textAlign:"center",margin:"0"}}>⚡ Bijli Splitter</h1>
        <p style={{textAlign:"center",color:"#64748b",marginTop:"5px"}}>Joint Family ke liye insaaf wala hisab</p>
        <div style={{background:"#fef9c3",padding:"16px",borderRadius:"16px",margin:"20px 0",border:"1px solid #fde68a"}}>
          <label style={{fontWeight:"800"}}>Total Bill Rs.</label>
          <input type="number" value={totalBill} onChange={e=>setTotalBill(Number(e.target.value))} style={{width:"100%",boxSizing:"border-box",padding:"14px",marginTop:"8px",borderRadius:"10px",border:"1px solid #e5e7eb",fontSize:"18px",fontWeight:"bold"}}/>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:"8px",fontSize:"13px",color:"#57534e"}}><span>Total Units: {totalUnits}</span><span>Rate: Rs. {rate.toFixed(2)}/unit</span></div>
        </div>
        {members.map(m=>(
          <div key={m.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0",borderBottom:"1px solid #f1f5f9"}}>
            <div><b>{m.name}</b><br/><small style={{color:"#64748b"}}>{m.units} Units</small></div>
            <div style={{textAlign:"right"}}><b style={{fontSize:"18px"}}>Rs. {(m.units*rate).toFixed(0)}</b><br/><span onClick={()=>setMembers(members.filter(x=>x.id!==m.id))} style={{fontSize:"12px",color:"red",cursor:"pointer"}}>delete</span></div>
          </div>
        ))}
        <div style={{display:"flex",gap:"8px",marginTop:"20px"}}>
          <input placeholder="Naam" value={n} onChange={e=>setN(e.target.value)} style={{flex:2,padding:"12px",borderRadius:"10px",border:"1px solid #ddd"}}/>
          <input placeholder="Units" type="number" value={u} onChange={e=>setU(e.target.value)} style={{flex:1,padding:"12px",borderRadius:"10px",border:"1px solid #ddd"}}/>
          <button onClick={()=>{if(!n||!u)return;setMembers([...members,{id:Date.now(),name:n,units:Number(u)}]);setN("");setU("")}} style={{background:"#0f172a",color:"white",border:"none",padding:"0 18px",borderRadius:"10px",fontSize:"20px"}}>+</button>
        </div>
        <div style={{background:"#0f172a",color:"white",padding:"16px",borderRadius:"16px",marginTop:"24px",textAlign:"center"}}>
          <div style={{opacity:0.7,fontSize:"13px"}}>Kul Milakar</div><h2 style={{margin:"5px 0 15px 0"}}>Total: Rs. {totalBill.toLocaleString()}</h2>
          <button onClick={()=>{const text=members.map(m=>`${m.name}: Rs. ${(m.units*rate).toFixed(0)} (${m.units} units)`).join("%0A");window.open(`https://wa.me/?text=*Bijli Bill Hisab*%0A%0A${text}%0A%0ATotal Bill: Rs.${totalBill}%0ARate: Rs.${rate.toFixed(2)}`,"_blank")}} style={{background:"#25D366",color:"white",border:"none",padding:"12px",borderRadius:"50px",width:"100%",fontWeight:"bold",fontSize:"15px",cursor:"pointer"}}>WhatsApp Par Bhejo 📱</button>
        </div>
      </div>
    </div>
  )
}
export default App;
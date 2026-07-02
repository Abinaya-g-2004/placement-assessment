import questions from "../data/questions.json";
import "./AdminDashboard.css";

function AdminDashboard(){

return(

<div className="admin">

<h1>Admin Dashboard</h1>

<table>

<thead>

<tr>

<th>ID</th>

<th>Category</th>

<th>Question</th>

<th>Answer</th>

</tr>

</thead>

<tbody>

{questions.map((q)=>(

<tr key={q.id}>

<td>{q.id}</td>

<td>{q.category}</td>

<td>{q.question}</td>

<td>{q.answer}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default AdminDashboard;
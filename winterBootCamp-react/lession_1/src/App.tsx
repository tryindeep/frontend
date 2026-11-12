//Important React rule: Component names must start with a capital letter.


// function Welcome(){
//   return <h1> hello react </h1>
// }

// function App() {
//   return (
//     // reusing components 
//     <>
//       <Welcome/> 
//       <Welcome/>
//       <Welcome/>
//     </>
//   )
// }

// export default App;

/*

What is JSX?
=> JSX stands for JavaScript XML.
  It is a syntax extension that allows us to write HTML-like markup inside JavaScript.

example : const element = <h1>Hello World</h1>;

**Five JSX rules you must understand

1. Return one parent element

incorrect : 
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome</p>
  );
}

correct :
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}

You can also use a Fragment (<>...</>) instead of adding an unnecessary DOM element.

2. Use className instead of class

<h1 className="heading">Hello</h1>


3. Use curly braces for JavaScript expressions

function App() {
  const username = "Tridip";

  return <h1>Hello, {username}</h1>;
}


4. JavaScript expressions can be calculated inside JSX

function App() {
  const a = 10;
  const b = 20;

  return <h1>Total: {a + b}</h1>;
}

5. Close every JSX tag

<img src="/profile.png" alt="Profile" />
<input type="text" />

*/

// =========== props and children ==============

// type ProfileCardProps = {
//   name : string, 
//   role : string,
//   company : string,
// }

// function ProfileCard ({name , role , company} : ProfileCardProps) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>Role : {role}</p>
//       <p>Company : {company}</p>
//     </div>
//   )
// }

// type CardProps = {
//   children : React.ReactNode;
// }

// function Card ({children} : CardProps){
//   return (
//     <div className="card">
//       {children}
//     </div>
//   )
// }

// function App() {

//   return (
//     <>
//       <ProfileCard
//         name="Tridip"
//         role="Software Developer"
//         company="Google"
//       />
//       <ProfileCard
//         name="Rahul"
//         role="Frontend Developer"
//         company="X"
//       />
//       <Card>
//         <h1>Soham</h1>
//         <p>Software Engineer</p>
//       </Card>

//     </>
//   )
// }


// ============ conditional Rendering =======================
// function App (){

//   const isLoggedIn = false;
//   return (
//     <>
//       {isLoggedIn ? <h1>Welcome Tridip </h1> : <h1>Please Login</h1>}
//     </>
//   )
// }

//================= maps and keys ======================

// function App() {

//   const languages = [
//     "java",
//     "TypeScript",
//     "c++",
//     "Python"
//   ]

//   return (
//     <>
//       <h1>Programming Language I know </h1>
//       <ul>
//         {languages.map((language) => (
//           <li key={language}>{language}</li>
//         ))}
//       </ul>

//     </>
//   )
// }

// ================== Rendering arrays of objects =================
// function App() {

//   const users = [
//     {
//       id: 1,
//       name: "Tridip",
//       age: 23,
//       role: "Software Developer"
//     },
//     {
//       id: 2,
//       name: "Kousik",
//       age: 24,
//       role: "Java Developer"
//     },
//     {
//       id: 3,
//       name: "Saikat",
//       age: 23,
//       role: "Go Developer"
//     }
//   ]

//   return (
//     <>
//       <h1> Users </h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} | {user.age} | {user.role}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }
export default App;
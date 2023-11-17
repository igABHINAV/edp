import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex" }} >
        <div><Sidebar /></div>
        <div className="container mx-2 my-2" >
          <main className="flex-shrink-0">
            <div className="container">


              <p style={{letterSpacing:"2.5px"}}>
                When we use a positive test charge, the electric field vectors have the same direction as the force acting on the test charge. The arrow representing the electric field starts from where we're measuring (like point P) and points in the direction of the force.

                The strength (magnitude) of the electric field at point P is the force divided by the test charge (F/q0). To represent this, we draw an arrow with its tail at the point where we're making the measurement (Fig. 22-2b). Drawing it any other way can lead to mistakes.

                It's important not to mix up "force" and "field" just because they both start with "f." Electric force is a push or pull, while the electric field is a more abstract property created by a charged object.

                In terms of units, the electric field is measured in newtons per coulomb (N/C), as per Eq. 22-1.

                We can move the test charge to different points to measure electric fields there. This helps us understand how the electric field is distributed around the charged object. The field exists independently of the test charge; it's something a charged object creates in the surrounding space, even in a vacuum, regardless of whether we're there to measure it.
              </p>

              <h4 className="mt-5">Electric Field Lines</h4>
              <p style={{letterSpacing:"2.5px"}}>
                When you bring one charge close to another fixed charge, the first charge feels a force because of the second charge. The area around a charge where another charge feels a force is called the electric field of that charge. In simpler terms, the electric field is like an invisible area around a charge where other charges can feel a push or pull.

                The electric field is measured with both direction and strength. If it's a positive charge, the push or pull is outward; for a negative charge, it's inward.
              </p>
            </div>
          </main>

        </div>
      </div>

    </div>
  );
}

export default App;

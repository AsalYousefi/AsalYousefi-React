import { Link } from "react-router";

export default function MainSection() {
  return (
    <main className="px-5 py-4 my-1 h-75 homepage">
      <div className="container h-100 d-flex justify-content-center align-items-end">
        <div className="d-flex flex-column flex-xl-row w-100 h-100 mx-4 justify-content-between justify-content-md-around align-items-xl-end align-items-center">
          <div className="homepage-text width-100 text-center text-xl-start">
            <p className="text-fs text-uppercase fw-light text-blue">
              so, you want to travel to
            </p>
            <h1 className="text-uppercase fw-normal mb-2">space</h1>
            <p className="description fw-light text-blue">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link
            to="/destination"
            className="explore rounded-circle d-flex justify-content-center align-items-center text-center text-uppercase bg-white my-xl-3"
          >
            explore
          </Link>
        </div>
      </div>
    </main>
  );
}

import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 section-title">
              <h2>Meet the Team</h2>
              <p>
              L'équipe Cigout mets tout en oeuvre dans l'accompagnement de ses utilisateurs. <br/> &#171; La meilleure façon de prédire l'avenir, c'est de le créer &#187;
              </p>{"Oscar Wilde"}
            </div>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 col-lg-3 team">
                    <div className="thumbnail">
                      {" "}
                      <div className="img-team">
                        <img src={d.img} alt="..." className="team-img" />
                      </div>
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import fetchData from "../../actions/fetchData";

class AstronomyContainer extends Component {
  componentDidMount() {
    this.props.fetchData();
    // console.log(this.props.astronomy);
  }

  render() {
    return <AstronomyCard data={this.props.astronomy} />;
  }
}

function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(
  mapStateToProps,
  { fetchData }
)(AstronomyContainer);

import React, { Component } from "react";
import axios from "axios";
import Filter from "./Filter";
import Loading from "./Loading";
import EventItem from "./EventItem";

import "./HomepageStyle.css";

export default class Homepage extends Component {
  state = {
    events: [],
    categories: [],
    city: null,
    category: null,
    isLoading: true
  };

  getPos() {
    return new Promise((resolve, reject) => {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(position => resolve(position))
        : reject(new Error("Geolocation not supported !"));
    });
  }

  async componentDidMount() {
    document.title = "My Event - Homepage";
    let events;
    const position = await this.getPos();
    const categories = await axios.get("categories/");

    position.coords
      ? (events = await axios.get(
          "events/search/?location.latitude=" +
            position.coords.latitude +
            "&location.longitude=" +
            position.coords.longitude +
            "&location.within=100km&token=BRIBPWBVJNJNVZQVW6ME"
        ))
      : (events = await axios.get(
          "events/search/?start_date.keyword=today&location.address=" +
            this.state.city +
            "&token=BRIBPWBVJNJNVZQVW6ME"
        ));

    const [resEvents, resCategories] = await Promise.all([events, categories]);

    const categoryData = resCategories.data.categories.sort((a, b) => a.name > b.name);
    const eventData = resEvents.data.events.sort((a, b) => a.start.local > b.start.local);

    // console.log(eventData);
    // console.log(categoryData);

    this.setState({
      events: eventData,
      categories: categoryData,
      isLoading: false
    });
  }

  handleInput = e => {
    this.setState({ city: e.target.value });
  };

  handleSelect = e => {
    this.setState({ category: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let resFilter;

    let eventsFilter = await axios.get(
      "events/search/?start_date.keyword=today&location.address=" +
        this.state.city +
        "&token=BRIBPWBVJNJNVZQVW6ME"
    );

    this.state.category === null
      ? (resFilter = await eventsFilter.data.events.sort((a, b) => a.start.local > b.start.local))
      : (resFilter = await eventsFilter.data.events
          .sort((a, b) => a.start.local > b.start.local)
          .filter(filterEvent => filterEvent.category_id === this.state.category));

    this.setState({
      events: resFilter
    });
  };

  render() {
    let eventLength = this.state.events.length > 0;

    const getCategoryName = new Map(
      this.state.categories.map(category => [category.id, category.name])
    );

    const showEvents = this.state.events.map(event => {
      return <EventItem event={event} getCategoryName={getCategoryName} key={event.id} />;
    });

    const eventFound = eventLength ? (
      showEvents
    ) : (
      <div className="alert alert-danger col-lg-12 text-center noEvent">
        <h1>No results found !</h1>
        <div className="divider" />
        <p>There is no event for this category in this city yet.</p>
      </div>
    );

    const showCategories = this.state.categories.map(categories => (
      <option value={categories.id} key={categories.id}>
        {categories.name}
      </option>
    ));

    return this.state.isLoading ? (
      <div>
        <Filter
          categoryList={showCategories}
          handleSelect={this.handleSelect}
          handleInput={this.handleInput}
          onSubmit={this.handleSubmit}
        />
        <Loading />
      </div>
    ) : (
      <div>
        <Filter
          categoryList={showCategories}
          handleSelect={this.handleSelect}
          handleInput={this.handleInput}
          onSubmit={this.handleSubmit}
        />
        <div className="container">
          <div className="row">{eventFound}</div>
        </div>
      </div>
    );
  }
}

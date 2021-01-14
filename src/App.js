import React from 'react';
import FilterData from './components/FilterData/FilterData';
import Loader from './components/Loader/index';
import Button from './components/Button/index';
import AddItem from './components/AddItem/index';
import Items from './components/Items/index';
import Pagination from './components/Pagination/index';
import DisplayItem from './components/DisplayItem/index';

export const searchingFor = (search) => {
  return function (x) {
    return (
      (x.id.toString().includes(search.toString()) || !search) ||
      (x.firstName.toLowerCase().includes(search.toLowerCase()) || !search) ||
      (x.phone.toLowerCase().includes(search.toLowerCase()) || !search) ||
      (x.email.toLowerCase().includes(search.toLowerCase()) || !search) ||
      (x.lastName.toLowerCase().includes(search.toLowerCase()) || !search)
    );
  };
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      headers: ['id', 'firstName', 'lastName', 'email', 'phone'],
      loading: true,
      currentPage: 1,
      postPerPage: 10,
      direction: {
        id: 'asc',
        firstName: 'asc',
        lastName: 'asc',
        email: 'asc',
        phone: 'asc',
      },
      sortIndicator: true,
      search: '',
      value: '',
      displayItem: null,
      addForm: false,
      // firstName: null,
    }

    this.sortBy = this.sortBy.bind(this);
    this.inputValue = this.inputValue.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.displayItem = this.displayItem.bind(this);
    this.addForm = this.addForm.bind(this);
    this.inputForm = this.inputForm.bind(this);
    this.addItemIntoTable = this.addItemIntoTable.bind(this);
  }

  componentDidMount() {
    this.getItems();
  };

  getItems() {
    fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then(results => results.json())
      .then(results => this.setState({
        items: results,
        loading: false
      }));
  };

  sortBy(key) {
    this.setState({
      items: this.state.items.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? a[key] - b[key]
          : b[key] - a[key]
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  inputValue = e => {
    this.setState({
      value: e.target.value
    })
    console.log('e.target.value: ', e.target.value)
  }

  searchHandler() {
    this.setState({
      search: this.state.value,
      value: '',
    })
  }

  displayItem(displayItem) {
    this.setState({
      displayItem,
    })
  }

  addForm() {
    this.setState({
      addForm: true,  
    })
  }

  inputForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
    console.log('name: ', [name], value)
  }

  addItemIntoTable() {
    const obj = {
      id: this.state.items.length,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
    };
    this.setState({
        items: [ obj, ...this.state.items],
        // addArr: this.state.items.unshift(value),
        addForm: false,
      })
      console.log(this.state.items);
  }

  render() {

    const {
      // obj,
      // value,
      search,
      items,
      headers,
      loading,
      sortIndicator,
      displayItem,
      direction,
      addForm,
      firstName,
      lastName,
      email,
      phone
    } = this.state;

    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber })
    };

    return (
      <>
        {loading
          ? <Loader />
          : <>
            <FilterData
              onClick={this.searchHandler}
              onChange={this.inputValue}
              // search={search}
              // value={search}
            />
            <Button 
              onClick={this.addForm}
            />
            {addForm 
            ? <AddItem 
                // obj={obj}
                onChange={this.inputForm}
                items={items}
                headers={headers}
                addNewItem={this.addItemIntoTable}
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
              />
            : null
            }
            <Items
              items={currentPosts}
              sortBy={this.sortBy}
              headers={headers}
              sortIndicator={sortIndicator}
              sortDirection={direction}
              displaySelectedItem={this.displayItem}
              search={search}
              // value={value}
            />
            {displayItem
              ? <DisplayItem item={displayItem} />
              : null}
            <Pagination postPerPage={this.state.postPerPage} totalPosts={items.length} paginate={paginate} />
          </>
        }
      </>
    )
  }
}

export default App;

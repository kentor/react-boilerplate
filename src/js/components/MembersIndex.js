const Immutable = require('immutable');
const MemberActions = require('../actions/MemberActions');
const Paginator = require('./Paginator');
const React = require('react');
const { connect } = require('react-redux');
import collectionFilterer from '../utils/collectionFilterer';

const MembersIndex = React.createClass({
  getInitialState() {
    const filters = Immutable.Map({
      page: 1,
      perPage: 10,
      query: '',
    });

    return {
      filters,
      newEmail: '',
      newName: '',
    };
  },

  componentDidMount() {
    this.props.dispatch(MemberActions.fetchIfNeeded());
  },

  destroy(id) {
    this.props.dispatch(MemberActions.destroy(id));
  },

  handleRequestPage(page) {
    this.setState({ filters: this.state.filters.set('page', page) });
  },

  handleRequestQuery(query) {
    this.setState({
      filters: this.state.filters.set('page', 1).set('query', query),
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    const emailNode = React.findDOMNode(this.refs.email);
    const nameNode = React.findDOMNode(this.refs.name);
    this.props.dispatch(MemberActions.create({
      email: emailNode.value,
      name: nameNode.value,
    }));
    emailNode.value = '';
    nameNode.value = '';
  },

  render() {
    const { members, loading } = this.props;

    if (loading) {
      return <main>LOADING</main>;
    }

    const { filters } = this.state;
    const {
      queryFilteredCollection: queryFilteredMembers,
      paginatedCollection: paginatedMembers,
    } = collectionFilterer(members, filters, query => m => (
      ~m.get('email').toLowerCase().indexOf(query)
    ));

    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="name" ref="name" />
          <input type="email" placeholder="email" ref="email" />
          <input type="submit" />
        </form>
        <input
          placeholder="search"
          valueLink={{
            requestChange: this.handleRequestQuery,
            value: filters.get('query'),
          }}
          type="search"
        />
        <ul>
          {paginatedMembers.map(member => (
            <li key={member.get('id')}>
              {member.get('name')}
              {' '}
              {`<${member.get('email')}>`}
            </li>
          )).toArray()}
        </ul>
        <Paginator
          numItems={queryFilteredMembers.count()}
          onRequestPage={this.handleRequestPage}
          page={filters.get('page')}
          perPage={filters.get('perPage')}
        />
      </main>
    );
  },
});

function select(state) {
  return {
    loading: !state.getIn(['members', 'loaded']),
    members: state.getIn(['members', 'items']),
  };
}

module.exports = connect(select)(MembersIndex);

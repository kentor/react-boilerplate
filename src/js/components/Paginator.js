const Immutable = require('immutable');
const React = require('react/addons');

function range(start, end) {
  const r = [];
  for (let i = start; i <= end; i++) r.push(i);
  return r;
}

const Paginator = React.createClass({
  componentWillReceiveProps(newProps) {
    const newNumPages = this.numPages(newProps);
    if (this.props.page > newNumPages) {
      this.props.onRequestPage(newNumPages);
    }
  },

  next() {
    if (this.nextDisabled()) return;
    this.props.onRequestPage(this.props.page + 1);
  },

  nextDisabled() {
    return this.props.page === this.numPages();
  },

  numPages(props = this.props) {
    return Math.ceil(props.numItems / props.perPage) || 1;
  },

  pageNumbers() {
    const n = this.props.page;
    const N = this.numPages();
    let pages;

    if (N <= 11) {
      pages = range(1, N);
    } else {
      const numGaps = (n <= 5 || n > N - 5) ? 1 : 2;
      pages = Immutable.Set(range(n - 2, n + 2).filter(n => n > 0 && n <= N));
      for (let i = 1; pages.size < 11 - numGaps; i++) {
        pages = pages.merge([i, N - i + 1]);
      }
      pages = pages.sort((a, b) => a - b);
    }

    return Immutable.OrderedSet(pages).toSeq();
  },

  prev() {
    if (this.prevDisabled()) return;
    this.props.onRequestPage(this.props.page - 1);
  },

  prevDisabled() {
    return this.props.page === 1;
  },

  render() {
    if (this.numPages() === 1) {
      return <div></div>;
    }

    let prev = 0;

    return (
      <nav className="paginator">
        <a onClick={this.prev} className={this.prevDisabled() && 'disabled'}>
          Previous
        </a>

        {this.pageNumbers().map(n => {
          let gap;
          if (n - 1 !== prev) {
            gap = <a className="gap" key={`gap-${n}`}>...</a>;
          }
          prev = n;

          return React.addons.createFragment({
            left: gap,
            right: (
              <a
                className={n === this.props.page && 'active'}
                key={n}
                onClick={this.props.onRequestPage.bind(this, n)}
              >
                {n}
              </a>
            ),
          });
        }).toArray()}

        <a onClick={this.next} className={this.nextDisabled() && 'disabled'}>
          Next
        </a>
      </nav>
    );
  },
});

module.exports = Paginator;

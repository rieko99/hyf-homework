import React from 'react';

class List extends React.Component {
    render() {
        const {
          items,
          deleteItem,
          toggleItem
        } = this.props;
        return ( < div >
          <
          ul > {
            items.length > 0 ? (items.map(item => < Item item = {
                item
              }
              deleteItem = {
                deleteItem
              }
              toggleItem = {
                toggleItem
              } > )) : ( < li > No thing to do,
              add some ^ < /li>)} < /
              ul > < /
              div > )
          }
        }

        class Item extends React.Component {
          render() {
            const {
              item,
              deleteItem,
              toggleItem
            } = this.props;
            return ( <
              li key = {
                item.id
              } >
              <
              input type = 'checkbox'
              checked = {
                item.completed
              }
              onChange = {
                () => toggleItem(item.id)
              }
              /> <
              span onClick = {
                () => toggleItem(item.id)
              }
              className = {
                item.completed ? 'item--checked' : ''
              } > {
                item.title
              } <
              /span> <
              bottom onClick = {
                () => deleteItem(item.id)
              } > X < /bottom> < /
              li >
            );
          }
        }

        export default List;

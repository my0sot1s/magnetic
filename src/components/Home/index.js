import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import { fetchUsers, addUser, updateUser } from '../../actions/usersAction';
import View from './view';
/**
 *className Home
 */
export default class Home extends React.Component {

  /**
   * render to work Component
   * @param item
   */
  renderWorkComponent(item) {
    const direct = '/author/' + item._id;
    return (
      <div className="work">
        <a href="javascript:;">
          <Link to={direct}>
            <img src={item.banner[0]} className="media" alt="" />
            <div className="caption">
              <div className="work_title">
                <h1>{item.titile}</h1>
                <h3>{item.author}</h3>
                <p className="beginStory">{item.begin}</p>
              </div>
              <div className="inforStory">
                <p className="dateCreate">{item.dateCreate}</p>
                <p>View: {item.views} <span>Share: {item.shares}</span></p>
              </div>
            </div>
          </Link>
        </a>
      </div>
    );
  }
  /**
   *render View for home
   */
  render() {
    return (
      <section className="main clearfix">
        <section className="slogan_frame">
          <div>
            <h1 className="slogan">Collection many story</h1>
          </div>
        </section>
        {this.props.prop.map(val => {
          return (this.renderWorkComponent(val));
        })}
      </section>
    );
  }
}
Home.defaultProps = {
  prop: [
    {
      _id: 1,
      titile: 'Cậu bé Tích Chu',
      author: 'Truyện cổ tích',
      views: 100,
      shares: 100,
      begin: 'Ngày xưa, có một bạn tên là Tích Chu. Bố mẹ...',
      dateCreate: '2017-02-09T10:40:56.497Z',
      banner: [
        'http://i.imgur.com/EKgTlfY.jpg'
      ]
    },
    {
      _id: 2,
      titile: 'Sự tích chim tu hú',
      author: 'Truyện cổ tích',
      views: 100,
      shares: 100,
      begin: 'Ngày xưa có hai nhà sư Năng Nhẫn và Bất Nhẫn. Hai người cùng cạo đầu',
      dateCreate: '2017-02-09T10:40:56.497Z',
      banner: [
        'http://i.imgur.com/iAyNlUO.jpg'
      ]
    },
    {
      _id: 3,
      titile: 'Quạ và Cáo',
      author: 'Truyện cổ tích',
      views: 100,
      shares: 100,
      begin: 'Câu chuyện này nói lên một điều: Khi làm bất cứ việc gì, chúng ta cũng cần phải suy nghĩ thấu đáo, không nên bị đánh lừa bởi những lời đường mật của kẻ khác.',
      dateCreate: '2017-02-09T10:40:56.497Z',
      banner: [
        'http://i.imgur.com/dD4kQP0.jpg'
      ]
    },
    {
      _id: 4,
      titile: 'Chú quạ thông minh',
      author: 'Truyện cổ tích',
      views: 100,
      shares: 100,
      begin: 'Câu chuyện giúp trẻ nhận ra được bài học về sự cố gắng hết mình trong mọi công việc chắc chắn sẽ đạt được thành công.',
      dateCreate: '2017-02-09T10:40:56.497Z',
      banner: [
        'http://i.imgur.com/qp0pbfO.jpg'
      ]
    },
    {
      _id: 5,
      titile: ' Đẽo cày giữa đường',
      author: 'Truyện cổ tích',
      views: 100,
      shares: 100,
      begin: 'Câu chuyện dạy cho ta bài học \'Làm việc gì cũng vậy, mình phải có chính kiến của mình và kiên trì với một con đường đã chọn\'',
      dateCreate: '2017-02-09T10:40:56.497Z',
      banner: [
        'http://i.imgur.com/wosH5JG.jpg'
      ]
    },
    {
      _id: 6,
      titile: ' Thỏ và Rùa',
      author: 'Truyện cổ tích',
      views: 100,
      shares: 100,
      begin: 'Không phải lúc nào Thỏ \'chạynhanh\' cũng thắng chú Rùa \'chậmchạp\' nhưng chăm chỉ, kiên trì.',
      dateCreate: '2017-02-09T10:40:56.497Z',
      banner: [
        'http://i.imgur.com/j9As4R2.jpg'
      ]
    }

  ],
};

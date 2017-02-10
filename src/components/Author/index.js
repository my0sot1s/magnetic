import React from 'react';
import FacebookProvider, { Share, CommentsCount } from 'react-facebook';
/**
 *render Author
 */
export default class Author extends React.Component {
  /**
   *before start
   */
  componentDidMount() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=251071115277192"; // App id
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  /**
   *render Share
   */
  renderPage() {
    return (
      <div className="fb-page"
        data-href="https://www.facebook.com/ma9net1c/"
        data-tabs="timeline" data-height="200" data-width="290"
        data-small-header="false" data-adapt-container-width="true"
        data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/ma9net1c/"
          className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/ma9net1c/">Facebook</a>
        </blockquote>
      </div>
    );
  }
  /**
   * render Facebook commnend
   */
  renderComment() {
    return (
      <div className="fbComment">
        <div className="fb-comments"
          data-href="https://localhost/"
          data-numposts="5"
          data-width="100%"></div>
      </div>);
  }
  /**
   *render clearfix button
   */
  renderClearFix(head) {
    return (
      <section className="top">
        <div className="wrapper content_header clearfix">
          <div className="work_nav">

            <ul className="btn clearfix">
              <li>
                <a href="#" className="previous" data-title="Previous"></a>
              </li>
              <li>
                <a href="index.html" className="grid" data-title="Home"></a>
              </li>
              <li>
                <a href="#" className="next" data-title="Next"></a>
              </li>
            </ul>

          </div>
          <h1 className="title">{head.titile}</h1>
        </div>
      </section>
    );
  }
  /**
   *render right_menu
   */
  renderRightMenu() {
    return (
      <div className="right_menu">
        <div>
          <div id="fb-root"></div>
          <h4 style={{ padding: 20 }}>View me -> my page</h4>
          {this.renderPage.bind(this)()}
        </div>
        <div style={{ margin: 20 }}>
          <h4>Some post</h4>
          <p>Lallalalala</p>
          <p>Lallalalala</p>
          <p>Lallalalala</p>
          <p>Lallalalala</p>
          <p>Lallalalala</p>
          <p>Lallalalala</p>
          <p>Lallalalala</p>
        </div>
      </div>
    );
  }
  /**
   *render story content
   */
  renderContent(story, des) {
    return (
      <div>

        <h2>Bài học</h2>
        <p>{des.begin}</p>

        <img src={story.banner[0]} className="media" alt="d" />

        <h2>Nội dung</h2>
        {story.content.map(line =>
          <p>{line}</p>
        )}
      </div>
    );
  }
  /**
   *renderView
   */
  render() {
    var id = this.props.params.id;
    return (
      <section className="main clearfix">
        {this.renderClearFix.bind(this, this.props.prop[id])()}
        <section className="wrapper">
          <div className="content">

            {this.renderContent.bind(this, this.props.stories[id - 1], this.props.prop[id - 1])()}

            {this.renderComment.bind(this)()}
          </div>
          {this.renderRightMenu.bind(this)()}
        </section>
      </section>
    );
  }
}

Author.defaultProps = {
  stories: [
    {
      _id: 1,
      banner: [
        'http://i.imgur.com/4032EVS.jpg'
      ],
      content: [
        'Ngày xưa, có một bạn tên là Tích Chu. Bố mẹ Tích Chu mất sớm, Tích Chu ở với bà.Hàng ngày bà phải làm việc quần quật kiếm tiền nuôi Tích Chu, có thức gì ngon bà cũng dành cho Tích Chu. Ban đêm, khi Tích Chu ngủ thì bà thức quạt. Thấy bà thương Tích Chu, có người bảo :',
        '- Bà ơi! Lòng bà thương Tích Chu cao hơn trời, rộng hơn biển. Lớn lên, Tích Chu sẽ không khi nào quên ơn bà.',
        'Thế nhưng lớn lên, Tích Chu lại chẳng thương bà. Bà thì suốt ngày làm việc vất vả, còn Tích Chu suốt ngày rong chơi. Vì làm việc vất vả, ăn uống lại kham khổ nên bà bị ốm. Bà lên cơn sốt nhưng chẳng ai trông nom. Tích Chu mãi rong chơi với bạn bè, chẳng nghĩ gì đến bà đang ốm. Một buổi trưa, trời nóng nực, cơn sốt lên cao, bà khát nước quá liền gọi: ',
        '- Tích Chu ơi, cho bà ngụm nước. Bà khát khô cổ rồi! ',
        'Bà gọi một lần, hai lần…rồi ba lần nhưng vẫn không thấy Tích Chu đáp lại. Mãi sau Tích Chu thấy đói mới chạy về nhà kiếm cái ăn. Tích Chu ngạc nhiên hết sức thấy bà biến thành chim và vỗ cánh bay lên trời. Tích Chu hoảng quá kêu lên:',
        '- Bà ơi! Bà đi đâu? Bà ở lại với cháu. Cháu sẽ mang nước cho bà, bà ơi! ',
        '- Cúc cu … cu! Cúc … cu cu! Chậm mất rồi cháu ạ, bà khát quá không thể chịu nổi phải hóa thành chim để bay đi kiếm nước. Bà đi đây, bà không về nữa đâu! ',
        'Nói rồi chim vỗ cánh bay đi.',
        'Tích Chu hoảng quá chạy theo bà, cứ nhằm theo hướng chim bay mà chạy. Cuối cùng Tích Chu gặp chim đang uống nước ở một dòng suối mát. Tích Chu gọi: ',
        '- Bà ơi! Bà trở về với cháu đi. Cháu sẽ đi lấy nước cho bà, cháu sẽ giúp đỡ bà, cháu sẽ không làm bà buồn nữa!',
        '- Cúc …cu…cu, muộn quá rồi cháu ơi! Bà không trở lại được nữa đâu!',
        'Nghe chim nói, Tích Chu òa khóc, Tích Chu thương bà và hối hận. Giữa lúc đó, có một bà tiên hiện ra, bà bảo Tích Chu:',
        '- Nếu cháu muốn bà trở lại thành người thì cháu phải đi lấy nước suối Tiên cho bà cháu uống. Đường lên suối Tiên xa lắm, cháu có đi được không? ',
        'Nghe bà Tiên nói, Tích Chu mừng rỡ vô cùng, vội vàng hỏi đường đến suối Tiên, rồi chẳng một phút chần chừ, Tích Chu hăng hái đi ngay. ',
        'Trải qua nhiều ngày đêm lặn lội trên đường, vượt qua rất nhiều nguy hiểm, cuối cùng Tích Chu đã lấy được nước suối mang về cho bà uống. Được uống nước suối Tiên, bà Tích Chu trở lại thành người và về ở với Tích Chu.',
        'Từ đấy, Tích Chu hết lòng yêu thương chăm sóc bà.'
      ],
      images: []
    },
    {
      _id: 2,
      banner: [
        'http://i.imgur.com/cZb3wfx.jpg'
      ],
      content: [
        'Ngày xưa có hai nhà sư Năng Nhẫn và Bất Nhẫn. Hai người cùng cạo đầu xuất gia từ ngày còn trẻ và cùng tu ở một ngôi chùa hẻo lánh.',
        'Sau một thời gian dài tu luyện thì bỗng một hôm, Năng Nhẫn được đức Phật độ cho thành chính quả.',
        'Bất Nhẫn thấy mình tu hành không kém gì bạn mà không được hưởng may mắn như bạn thì rất buồn bực. Chàng đến trước tòa sen hết sức kêu nài với đức Phật bày tỏ lòng chân thành tu đạo cùng mọi sự khổ hạnh đã trải qua của mình. Đức Phật bảo chàng: - \'Nhà ngươi chuyên tâm cầu đạo, lại là người trong sạch, thật đáng khen ngợi. Nhưng tính tình nhà ngươi vẫn như con trâu chưa thuần, chưa thể đắc đạo được. Vậy hãy cố gắng tỏ rõ tấm lòng nhẫn nhục trong một cuộc khổ hạnh trường kỳ rồi sẽ theo bạn cũng chưa muộn\'.',
        'Bất Nhẫn nghe lời bèn lên núi chọn một gốc cây bắt chước người xưa ngồi xếp bằng tu theo lối trường định. Chàng cương quyết ngồi im lặng như thế mãi trong ba năm, dù có phải thế nào cũng không chịu dậy.',
        'Và từ hôm đó, Bất Nhẫn như một vật vô tri vô giác. Những con sâu con kiến bò khắp mình chàng. Những con thú cà vào thân chàng. Những con chim ỉa phẹt lên đầu chàng. Chàng đều không hề bận tâm. Chàng chỉ một mực tâm tâm niệm niệm nghĩa lý cao thâm của đạo Phật.',
        'Cứ như thế, trải qua hai mùa hè và sắp sửa qua một mùa hè thứ ba là kết liễu cuộc tu luyện. Một hôm tự dưng có hai vợ chồng con chim chích ở đâu đến làm tổ ngay trong vành tai của Bất Nhẫn. Chàng cứ để yên, mặc chúng muốn làm gì thì làm. Chúng đi về tha rác lên đầu, lên mặt. Rồi chim mái đẻ trứng. Rồi cả một thời kỳ hai vợ chồng thay phiên nhau ấp. Cho đến lúc trứng nở, những con chim non kêu léo nhéo suốt ngày. Nhưng Bất Nhẫn không lấy thế làm khó chịu.',
        'Một hôm, lúc ấy chỉ còn mười ngày nữa thì Bất Nhẫn hết hạn ngồi dưới gốc cây. Hôm đó, đến lượt con chim vợ đi tìm thức ăn cho con.',
        'Suốt một buổi chiều nó vẫn không kiếm được một chút gì. Mãi đến gần tối lúc lượn qua một cái hồ, chim vợ mới thấy một con nhện đang giăng tơ trong một đóa hoa sen. Nhện nhác thấy chim liền ẩn mình vào giữa những cánh hoa làm cho chim mất công tìm mãi. Không ngờ hoa sen vừa tắt ánh mặt trời đã cụp ngay cánh lại, nhốt chim vào trong. Chim cố công tìm lối chui ra nhưng những cánh hoa vây bọc dày quá đành chịu nằm lại đó.',
        'Ở nhà, chim chồng hết bay đi kiếm vợ lại trở về. Đàn con đói mồi nháo nhác suốt đêm. Mãi đến sáng mai, chờ lúc hoa nở, chim vợ mới thoát được bay về tổ. Một cuộc cãi lộn nổ ra bên tai Bất Nhẫn. Ghen vợ, chim chồng mắng nhiếc vợ hết lời. Nhưng chim vợ vẫn hết sức bày tỏ nỗi lòng trinh bạch của mình. Cuộc đấu khẩu kéo dài suốt cả buổi sáng và có cơ chưa chấm dứt. Bất Nhẫn rất khó chịu. Thêm vào đó, đàn con khóc đói chíu chít điếc cả tai. Nhè lúc vợ chồng chim cãi vã đến chỗ găng nhất, Bất Nhẫn bỏ tay lên tai giật cái tổ chim vứt mạnh xuống đất và nói: - \'Đồ khốn ! Chỉ có mỗi một chuyện đó mà chúng mày làm điếc tai ông từ sáng đến giờ\'.',
        'Thế là công sức tu luyện của Bất Nhẫn sắp hoàn thành thốt nhiên vứt bỏ trong chốc lát.',
        'Nhưng Bất Nhẫn vẫn không nản chí. Trước tòa sen, chàng hứa sẽ kiếm cách tỏ rõ sự hối lỗi của mình. Chàng tìm đến một khúc sông nước chảy xiết, tình nguyện làm người chèo đò đưa khách bộ hành quá giang mà không lấy tiền. Chàng quyết chở cho đến người thứ một trăm mới chịu nghỉ tay.',
        'Lần này Bất Nhẫn tỏ ra một người rất nhẫn nại. Tuy bến sông thường vắng khách, chàng vẫn không chịu bỏ dở công việc. Luôn trong hai năm chàng chở được chín mươi tám người mà không xảy ra việc gì.',
        'Một hôm vào khoảng giữa thu, nước sông tự nhiên tràn về chảy xiết hơn mọi ngày. Trời bỗng đổ một trận mưa lớn. Giữa lúc đó có một người đàn bà dắt một em bé đòi qua sông. Hắn có vẻ là vợ một viên quan sở tại; chưa bước xuống thuyền đã dọa Bất Nhẫn:',
        '- Chú nhớ chèo cho vững nghe không. Che mui cho kín. Nếu để chúng ta mà ướt thì liệu chừng kẻo roi quắn đít đó.',
        'Nghe nói thế Bất Nhẫn đã hơi bực, nhưng chàng nín được và vẫn giữ vẻ mặt tươi cười đáp:',
        '- Bà và cậu đừng sợ gì cả. Tôi xin cố sức.',
        'Rồi chàng vận dụng hết tài nghề để đưa hai mẹ con nhà nọ qua bên kia sông được vô sự. Lúc sắp lên bờ, người đàn bà bỗng kêu lên:',
        '- Ta quên khuấy đi mất. Có một gói hành lý bỏ quên ở quán bên kia. Vậy nhà ngươi chịu khó chèo sang lấy hộ.',
        'Bất Nhẫn nín lặng cắm cổ chèo qua sông giữa sóng gió. Mãi đến gần tối chật vật lắm chàng mới đưa được gói hành lý sang cho người đàn bà. Nhưng khi soát lại gói, người đàn bà nọ lại kêu lên:',
        '- Thôi rồi! Còn một đôi giày của thằng bé bỏ ở gậm giường. Thế nào nhà ngươi cũng phải gắng sang lấy cho ta một lần nữa.',
        'Người đàn bà nói chưa dứt lời thì Bất Nhẵn đã chỉ tay vào mặt:',
        '- Cút đi! Tao có phải sinh ra để hầu hạ mẹ con nhà mày mãi đâu.',
        'Nhưng người đàn bà ấy vốn là đức Phật Quan âm hiện hình xuống thử lòng người đệ tử khổ tu đó; bấy giờ lại hiện nguyên hình và cất tiếng bảo chàng:',
        '- Nhà ngươi vẫn chưa thực tâm nhẫn nhục, như thế thì tu gì mà tu. Có tu hú!',
        'Bất Nhẫn thẹn quá đành cúi đầu nhận lỗi.',
        'Phật bà Quan âm sau đó bắt Bất Nhẫn hóa thành một giống chim mà người đời sau quen gọi là chim tu hú. Họ bảo thứ chim đó vào khoảng cuối hè sang thu hay xuất hiện, đúng vào lúc xảy ra câu chuyện giữa Bất Nhẫn với Phật Bà.'
      ],
      images: []
    },
    {
      _id: 3,
      banner: [
        'http://i.imgur.com/Blg7Ybk.jpg'
      ],
      content: [
        'Một hôm, Cáo thấy đói tới mức bụng sôi lên ùng ục, nó bèn mò ra khỏi hang để đi tìm thức ăn. Nó nhìn thấy một chú Quạ đang đậu trên cành cây cao, trong miệng ngậm một miếng pho mát vừa mới kiếm được. Cáo thèm đến chảy cả nước miếng, nó đảo mắt một lượt, thấy xung quanh không có ai, liền nói với Quạ:',
        'Bạn Quạ thân mến ơi, bạn có khỏe không? ',
        'Quạ chỉ liếc Cáo một cái nhưng không trả lời.Chú cố nhét mỏ của mình vào cái bình. Đáng buồn thay, cổ của bình quá hẹp không vừa với cái mỏ của quạ. ',
        'Nghĩ cách khác, chú lại cố gắng để đẩy đổ cái bình xuống cho nước chảy ra ngoài. Nhưng bình quá to và nặng so với chút sức lực còn lại của quạ.',
        'Không bỏ cuộc, quạ suy nghĩ xem mình nên làm gì để có thể uống được nước trong bình. Nhìn ra xung quanh, chú bắt gặp mấy hòn đá cuội nằm vương vãi trên mặt đất. Đột nhiên chú nảy ra một ý tưởng cực kỳ thông minh. Chú dùng mỏ của mình để nhặt nhạnh từng hòn sỏi một, rồi thả chúng vào bình. Càng nhiều sỏi được thả vào thì mực nước trong bình tiếp tục dâng lên cao. Chẳng bao lâu nước đã dâng lên đủ cao để quạ có thể uống. Kế hoạch của quạ thành công rực rỡ.'
      ],
      images: []
    },
    {
      _id: 4,
      banner: [
        'http://i.imgur.com/B1IfG4i.jpg'
      ],
      content: [
        'Một ngày nóng nực, chú quạ khát nước đến khô cả cổ. Chú cứ bay mãi bay mãi để tìm nước uống nhưng không thấy. Chú cảm thấy mình đã rất yếu, gần như từ bỏ hy vọng.',
        'Đột nhiên, chú nhìn thấy một cái bình nước ở dưới mặt đất. Vội vàng chú bay thẳng xuống để xem xem có chút nước nào sót lại trong bình không. Thật may làm sao, trong bình vẫn có một chút nước đủ để chú thoả cơn khát.',
        'Chú cố nhét mỏ của mình vào cái bình. Đáng buồn thay, cổ của bình quá hẹp không vừa với cái mỏ của quạ. Nghĩ cách khác, chú lại cố gắng để đẩy đổ cái bình xuống cho nước chảy ra ngoài. Nhưng bình quá to và nặng so với chút sức lực còn lại của quạ.',
        'Không bỏ cuộc, quạ suy nghĩ xem mình nên làm gì để có thể uống được nước trong bình. Nhìn ra xung quanh, chú bắt gặp mấy hòn đá cuội nằm vương vãi trên mặt đất. Đột nhiên chú nảy ra một ý tưởng cực kỳ thông minh. Chú dùng mỏ của mình để nhặt nhạnh từng hòn sỏi một, rồi thả chúng vào bình. Càng nhiều sỏi được thả vào thì mực nước trong bình tiếp tục dâng lên cao. Chẳng bao lâu nước đã dâng lên đủ cao để quạ có thể uống. Kế hoạch của quạ thành công rực rỡ.'
      ],
      images: []
    },
    {
      _id: 5,
      banner: [
        'http://i.imgur.com/FLbX2eI.jpg'
      ],
      content: [
        'Chuyện kể rằng có một bác nông dân rất nghèo, cả đời sống bằng nghề đồng áng, bác muốn làm một cái cày thật tốt để làm công việc đồng áng năng suất và đỡ vất vả hơn.',
        'Một hôm, bác rất vui vì đã xin được một cây gỗ tốt nhưng bác chưa làm cái cày bao giờ, bác bèn mang khúc gỗ ra ven đường ngồi đẽo và hỏi ý kiến mọi người.',
        'Bác đẽo được một lúc thì một người đi qua chê:',
        '– Bác đẽo thế không phải rồi, bác đẽo to quá.',
        'Bác nông dân nghe thấy có lý bèn làm theo. Bác làm được một lúc lại có một người đi qua bảo:',
        '– Bác đẽo thế này không cày được đâu, cái đầu cày bác làm to quá….',
        'Bác nông dân nghe có lý hơn, bác lại chỉnh sửa theo lời khuyên, bác đẽo được một lúc lại một người đi qua nói:',
        '– Bác đẽo thế không ổn rồi, cái cày bác làm dài quá không thuận tay.',
        'Bác nông dân nghe lại có lý hơn, lại chỉnh sửa theo.',
        'Và cuối cùng, hết ngày hôm đấy bác nông dân chỉ còn một khúc gỗ nhỏ, bác không còn cơ hội để đẽo cái cày theo ý mình nữa, cây gỗ quý đã thành một đống củi vụn.',
        'Bác buồn lắm nhưng cuối cùng bác đã hiểu:“Làm việc gì cũng vậy, mình phải có chính kiến của mình và kiên trì với một con đường đã chọn.”'
      ],
      images: []
    },
    {
      _id: 6,
      banner: [
        'http://i.imgur.com/6gKLZ7q.jpg'
      ],
      content: [
        'Ngày ấy, trong một khu rừng nọ có một chú Rùa cùng một chú Thỏ chung sống cùng với nhau. Có thể nói Rùa và Thỏ chính là một đôi bạn vô cùng thân thiết ở trong khu rừng này. Nhưng bỗng nhiên, vào một ngày kia, cả hai không hiểu sao lại tranh cãi lớn về chuyện ai là kẻ chạy nhanh hơn.',
        'Sau một hồi cãi cọ kịch liệt thì Rùa và Thỏ đã quyết định tổ chức cuộc thi chạy để có thể xác định xem ai có thể về đích trước, cũng chính là kẻ chạy nhanh hơn.',
        'Thỏ thì vốn được biết đến là một trong số những loài vật chạy nhanh nhất trong rừng, bởi vậy nên chỉ vừa mới bắt đầu cuộc đua Thỏ ta đã dùng hết sức mà chạy. Thỏ chạy nhanh như là tên bắn, chỉ một lúc kể từ khi bắt đầu thì Thỏ đã thấy mình bỏ Rùa ở tít phía xa kia.',
        'Trong lòng Thỏ chắc mẩm:',
        '– Rùa kia còn lâu mới có thể bắt kịp ta được, cậu ta vô cùng chậm chạp, vậy thì mình hãy tranh thủ mà nghỉ ngơi chút đã!',
        'Nghĩ như vậy nên Thỏ chẳng vội vàng, cứ vui vẻ mà dạo chơi, hết hái hoa lại bắt bướm, khi đã thấm mệt thì Thỏ tìm đến dưới gốc cây lớn, lăn ra mà ngủ. Trong lúc Thỏ thảnh thơi chơi đùa rồi nằm nghỉ thì Rùa vẫn rất chăm chỉ mà bước từng bước một, những bước chân nặng nhọc dần đưa Rùa tiến về phía đích.',
        'Lúc Thỏ đã ngủ đẫy giấc mà tỉnh lại thì bầu trời bắt đầu chuyển tối. Lúc này thì Thỏ mới giật mình và nhận ra rằng Rùa ta đã sắp tới đích trước cả mình. Thỏ vội vội vàng vàng co cẳng mà đuổi theo, nhưng đã không còn kịp nữa, Rùa đã tới đích trước nó.',
        'Vậy là cuối cùng Thỏ đã phải chịu thua Rùa. Bởi vì khinh thường Rùa nên Thỏ đã không nghiêm túc trong cuộc thi chạy, cuối cùng phải chịu thất bại, và Rùa đã trở thành người chạy nhanh nhất bởi tính kiên trì, nhẫn nại và chăm chỉ của mình.'
      ],
      images: []
    }
  ],
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

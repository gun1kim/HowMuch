import "./Search.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import item from "../assets/images/home_item_img.png";
function Search() {
    return (
        <div class="search">
      <div class="wrapper">
        <div class="header">
          <div class="container">
            <div class="div">
              <div class="logo-icon">
                <div class="logo-text">HowMuch</div>
                <img class="logo-img" src={logo} />
              </div>
              <div class="header-input"><img class="img" src={search_logo} /></div>
              <div class="main-menu">
                <div class="menu-item"><div class="menu-item-txt">장바구니</div></div>
                <div class="menu-item"><div class="menu-item-txt">주문조회</div></div>
                <div class="menu-item"><div class="text-wrapper">마이페이지</div></div>
                <div class="menu-item"><div class="menu-item-txt">로그아웃</div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="main">
          <div class="container-2">
            <div class="title"><div class="title-msg">‘테스트’에 대한 검색 결과</div></div>
            <div class="row">
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
              <div class="home-item">
                <img class="home-item-img" src={item} />
                <div class="home-item-info">
                  <div class="name">나이키 1</div>
                  <div class="price">120,000원</div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="pagination">
                <div class="page"><img class="carat" src="img/carat-2.svg" /></div>
                <div class="page-active-wrapper">
                  <div class="page-active"><div class="num">1</div></div>
                </div>
                <div class="page-2"><div class="num-2">2</div></div>
                <div class="page-2"><div class="num-2">3</div></div>
                <div class="page-2"><div class="num-2">4</div></div>
                <div class="page-2"><div class="num-2">5</div></div>
                <div class="page-2"><img class="carat" src="img/carat.svg" /></div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="row-wrapper">
            <div class="row-2">
              <div class="col">
                <div class="row-3">
                  <div class="logo-icon-2">
                    <div class="logo-text">HowMuch</div>
                    <img class="logo-img" src={logo} />
                  </div>
                  <p class="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                </div>
              </div>
              <div class="col">
                <div class="row-3">
                  <img class="git-hub" src={github_logo} />
                  <p class="p">현재 웹사이트의 소스 코드는 하단의 Git Hub에서 확인하실 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    )
}

export default Search;



function addFeed() {
    const config = {
        method: "get"
    };
    fetch("https://gist.githubusercontent.com/Pi-ren/17b37d5294dab8219b043275319c236a/raw/6c1c81d63e623f95c0f67b82d3c1d21733c2fb4a/test.json", config)
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < data.feedIn.length; i++) {
                let feedIn = data.feedIn[i];

                //1. Feed Header
                const profile_pic = document.createElement("img");
                profile_pic.src = feedIn.profile_pic;
                profile_pic.className = 'profile_pic';

                const profile_name = document.createElement("h2");
                profile_name.className = 'name';
                profile_name.innerHTML = feedIn.name;

                const leftmenu = document.createElement('div');
                leftmenu.className = 'leftmenu';
                leftmenu.appendChild(profile_pic);
                leftmenu.appendChild(profile_name);

                const dotmark = document.createElement('img');
                dotmark.className = 'mark';
                dotmark.src = data.dotmark;

                const rightmenu = document.createElement('div');
                rightmenu.className = 'rightmenu';
                rightmenu.appendChild(dotmark);

                const feedheader = document.createElement('div');
                feedheader.className = 'feedheader';
                feedheader.appendChild(leftmenu);
                feedheader.appendChild(rightmenu);

                //2.FeedPhoto
                const showpic = document.createElement('img');
                showpic.className = 'showpic';
                showpic.src = feedIn.show_pic;

                const feedphoto = document.createElement('div');
                feedphoto.className = feedphoto;
                feedphoto.appendChild(showpic);

                //3.Feedmenu
                const heartmark = document.createElement('img');
                heartmark.className = 'mark';
                heartmark.src = data.heartmark;

                const commentmark = document.createElement('img');
                commentmark.className = 'mark';
                commentmark.src = data.commentmark;

                const outmark = document.createElement('img');
                outmark.className = 'mark';
                outmark.src = data.outmark;

                const leftmenu2 = document.createElement('div');
                leftmenu2.className = 'leftmenu2';
                leftmenu2.appendChild(heartmark);
                leftmenu2.appendChild(commentmark);
                leftmenu2.appendChild(outmark);

                const bookmark = document.createElement('img');
                bookmark.className = 'mark';
                bookmark.src = data.bookmark;

                const rightmenu2 = document.createElement('div');
                rightmenu2.className = 'rightmenu';
                rightmenu2.appendChild(bookmark);

                const feedmenu = document.createElement('div');
                feedmenu.className = 'feedmenu';
                feedmenu.appendChild(leftmenu2)
                feedmenu.appendChild(rightmenu2)

                //4.Feedcomment
                const likes = document.createElement('h3');
                likes.className = 'likes';
                likes.innerHTML = feedIn.likes;

                const comment = document.createElement('h3');
                comment.className = 'comment';
                comment.innerHTML = feedIn.comment;

                const incom = document.createElement('input');
                incom.placeholder = "댓글 달기..";
                incom.className = 'incom';

                const incombtn = document.createElement('button');
                incombtn.className = 'incombtn';
                incombtn.value = '1';
                incombtn.innerHTML = "게시";

                //댓글달기 부분 실험 시작
                incom.addEventListener('keyup',function(){
                    var keyCode = (window.Event) ? event.which : event.keyCode;
                    if (keyCode == 13) {
                        if (!(incom.value)) {} else {
                            comment.innerHTML = incom.value;
                            incom.value=null;
                        }
                    }
                })
                incombtn.addEventListener('click',function(){
                    if (!(incom.value)) {} else {
                        comment.innerHTML = incom.value;
                        incom.value=null;
                    }
                })
                //댓글달기 부분 실험 끝


                const empty = document.createElement('div');
                empty.appendChild(incom);
                empty.appendChild(incombtn);

                const feedcomment = document.createElement('div');
                feedcomment.className = 'feedcomment';
                feedcomment.appendChild(likes)
                feedcomment.appendChild(comment)
                feedcomment.appendChild(empty)

                //main feed
                const feed = document.createElement("feed");
                feed.className = "feed";
                feed.appendChild(feedheader);
                feed.appendChild(feedphoto);
                feed.appendChild(feedmenu);
                feed.appendChild(feedcomment);

                const main = document.getElementById("main");
                main.className = "main";
                main.appendChild(feed)
            }
        })
        .catch(error => console.log("fetch error"));
}
addFeed();

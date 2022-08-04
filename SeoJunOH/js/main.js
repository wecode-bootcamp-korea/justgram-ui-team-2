function addFeed() {
    fetch("https://gist.githubusercontent.com/Pi-ren/17b37d5294dab8219b043275319c236a/raw/6c1c81d63e623f95c0f67b82d3c1d21733c2fb4a/test.json",)
        .then(res => res.json())
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

                const feedheader = document.createElement('div');
                feedheader.className = 'feedline';
                feedheader.appendChild(leftmenu);
                feedheader.appendChild(dotmark);

                //2.Feedphoto
                const feedphoto = document.createElement('img');
                feedphoto.className = feedphoto;
                feedphoto.src = feedIn.show_pic;

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
                leftmenu2.className = 'leftmenu';
                leftmenu2.appendChild(heartmark);
                leftmenu2.appendChild(commentmark);
                leftmenu2.appendChild(outmark);

                const bookmark = document.createElement('img');
                bookmark.className = 'mark';
                bookmark.src = data.bookmark;

                const feedmenu = document.createElement('div');
                feedmenu.className = 'feedline';
                feedmenu.appendChild(leftmenu2)
                feedmenu.appendChild(bookmark)

                //likes
                const likes = document.createElement('p');
                likes.className = 'likes';
                likes.innerHTML = feedIn.likes;

                //4.Feedcomment
                const comment = document.createElement('h3');
                comment.className = ('comment' + i);
                comment.innerHTML = feedIn.comment;

                const incom = document.createElement('input');
                incom.placeholder = "댓글 달기..";
                incom.className = 'incom';

                const incombtn = document.createElement('button');
                incombtn.className = 'incombtn';
                incombtn.value = '1';
                incombtn.innerHTML = "게시";

                const write = document.createElement('div');
                write.className="feedline";
                write.appendChild(incom);
                write.appendChild(incombtn);

                const feedcomment = document.createElement('div');
                feedcomment.className = 'feedcomment';
                feedcomment.appendChild(comment)

                //main feed
                const feed = document.createElement("feed");
                feed.className = "feed";
                feed.appendChild(feedheader);
                feed.appendChild(feedphoto);
                feed.appendChild(feedmenu);
                feed.appendChild(likes);
                feed.appendChild(feedcomment);
                feed.appendChild(write);

                const main = document.getElementById("main");
                main.className = "main";
                main.appendChild(feed)

                //댓글달기 부분 실험 시작
                incom.addEventListener('keyup', function () {
                    var keyCode = (window.Event) ? event.which : event.keyCode;
                    if (keyCode == 13) {
                        if (!(incom.value)) { } else {
                            const newComment = document.createElement('h3');
                            newComment.className = ('comment' + i);
                            newComment.innerHTML = incom.value;
                            feedcomment.appendChild(newComment);
                            incom.value = null;
                            //댓글이 3개초과시 삭제
                            const commentthree = document.getElementsByClassName('comment' + i);
                            if (commentthree.length == 4) {
                                feedcomment.removeChild(commentthree[0])
                            }
                        }
                    }
                })
                incombtn.addEventListener('click', function () {
                    if (!(incom.value)) { } else {
                        const newComment = document.createElement('h3');
                        newComment.className = ('comment'+i);
                        newComment.innerHTML = incom.value;
                        feedcomment.appendChild(newComment);
                        incom.value = null;
                        //댓글이 3개초과시 삭제
                        const commentthree = document.getElementsByClassName('comment'+i);
                        if (commentthree.length == 4) {
                            feedcomment.removeChild(commentthree[0])
                        }
                    }
                })
            }
        })
        .catch(error => console.log("fetch error"));
}

addFeed()
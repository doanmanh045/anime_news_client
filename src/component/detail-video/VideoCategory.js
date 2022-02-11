import React, { useEffect, useState } from 'react';
import { firestore } from '../../utils/firebaseInit';
import Image from 'next/image';
import Link from 'next/link';
import { convertUrlSlug } from '../../utils/RegexUrl';
export default function VideoCategory({ videoId, categoryId }) {
    let [videos, setVideos] = useState([]);
    useEffect(() => {
        search()
    }, [videoId])
    let search = async () => {
        try {
            let filter = firestore
                .collection("Video")
                .where("categoryId", "==", categoryId)
                .orderBy("createdDate", "desc")

            let querySnapshot = await (await filter.get()).docs
            let resp = []
            querySnapshot.forEach(doc => {
                resp.push({ ...doc.data(), id: doc.id })
            });

            let data = resp.filter(item => item.id !== videoId)
            setVideos(data)
        } catch (error) {

        }
    }
    return (
        <>
            {videos?.length > 0 && <div className="player__sidebar">
                <div className="player__sidebar--header  ">
                    <div className="tab-item tab-episode activated">Danh sách video cùng danh mục </div>
                </div>
                <div className="player__sidebar--body body-episode ">
                    <div className="episode-list-tool">
                        <div className="season-active hidden" id="season-active"></div>
                        <div className="season-list ps-container ps-theme-default" data-ps-id="6bf62bb4-6740-a1fa-2079-5af566b9b484">
                            <div className="ps-scrollbar-x-rail">
                                <div className="ps-scrollbar-x" tabIndex="0">
                                </div>
                            </div>
                            <div className="ps-scrollbar-y-rail">
                                <div className="ps-scrollbar-y" tabIndex="0">
                                </div>
                            </div>
                        </div>
                        <div className="episode-total">Tổng số: {videos?.length} video</div>
                        <div className="episode-select">

                        </div>
                    </div>
                    <div className="episode-list ps-container ps-theme-default" data-ps-id="5935c571-4393-9aec-a588-a7da5d8d4619">
                        <div className="ps-scrollbar-x-rail">
                            <div className="ps-scrollbar-x" tabIndex="0">
                            </div>
                        </div>
                        <div className="ps-scrollbar-y-rail">
                            <div className="ps-scrollbar-y" tabIndex="0">
                            </div>
                        </div>
                        {videos.map((video, index) => {
                            return (
                                <Link href={`/video/${convertUrlSlug(video.title.substring(0, 35))}-${video.id}`} key={index} >
                                    <div className="episode__item episode-141394" style={{ display: 'flex' }} >
                                        <div className="episode__item--thumbnail">
                                            {video?.photoURL ? <Image unoptimized loader={() => { return `${video?.photoURL}` }} src={video?.photoURL} width='120' height="55" />
                                                : <Image src={require('../../images/item.jpg')} width='120' height="55" />
                                            }
                                        </div>
                                        <div className="episode__item--meta">
                                            <div className="episode-item-title">{video?.title}</div>
                                            <div className="episode-item-views">{video?.views} lượt xem</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            }
        </>
    )
}
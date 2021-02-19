import React, { memo } from 'react'

import {formatVNDate} from '../../utility'

export default memo(function Infomation({movie}) {
    return (
        <div className="wraps">
            <div className="col left">
                <div className="row">
                    <p className="content-title">Ngày công chiếu</p>
                    <p className="content-info">{formatVNDate(movie.release)}</p>
                </div>
                <div className="row">
                    <p className="content-title">Đạo diễn</p>
                    <p className="content-info">{movie.producer}</p>
                </div>
                <div className="row">
                    <p className="content-title">Diễn viên</p>
                    <p className="content-info">{movie.cast}</p>
                </div>
                <div className="row">
                    <p className="content-title">Thể Loại</p>
                    <p className="content-info">{movie.category}</p>
                </div>
                <div className="row">
                    <p className="content-title">Định dạng</p>
                    <p className="content-info">{movie.type}</p>
                </div>
                <div className="row">
                    <p className="content-title">Quốc Gia SX</p>
                    <p className="content-info">{movie.nation}</p>
                </div>
            </div>
            <div className="col right">
                <p className="content-title">Nội dung</p>
                <p className="content-info">{movie.describes}</p>
            </div>
        </div>
    )
})

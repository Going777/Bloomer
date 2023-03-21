import React, { useRef, useState } from "react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { FiCalendar, FiUser } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { SMain } from "./styles";
import GroupJoinInput from "../GroupJoinInput/GroupJoinInput";
import DiaryCreateInput from "../../Diary/DiaryCreateInput/DiaryCreateInput";

const convertDateFormat = (date: string) => {
  const target = new Date(date);
  const year = target.getFullYear();
  const month = target.getMonth() + 1;
  const day = target.getDate();
  return year + "." + month + "." + day;
};

const GroupUnJoinListITem = ({ group }: any) => {
  const [isDetail, setIsDetail] = useState(false);
  const contentInput = useRef<HTMLInputElement>(null);
  const handleClickDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <SMain onClick={handleClickDetail}>
      <div className="title__wrapper">
        <div className="group-name">{group.name}</div>
        <div className="private__section">
          {group.status === "waiting" && (
            <div id="accept-tag">승인 대기 중</div>
          )}
          {group.isPrivate && (
            <div>
              <FaLock color="#656565" />
            </div>
          )}
        </div>
      </div>
      <div className="content__wrapper">
        <div className="flex__oneline">
          <div>
            <FiCalendar />
          </div>
          <div className="group-content">
            {convertDateFormat(group.createdTime)}
          </div>
        </div>
        <div className="flex__oneline">
          <div>
            <FiUser />
          </div>
          <div className="group-content">{group.participantCnt} 명</div>
        </div>
        <div className="flex__oneline">
          <div>
            <RiFilePaper2Line />
          </div>
          {isDetail ? (
            <div className="group-content-detail">{group.info}</div>
          ) : (
            <div className="group-content">{group.info}</div>
          )}
        </div>
        {isDetail && group.status !== "waiting" && (
          <div>
            <GroupJoinInput />
            <button>참여 신청하기</button>
          </div>
        )}
      </div>
    </SMain>
  );
};

export default GroupUnJoinListITem;

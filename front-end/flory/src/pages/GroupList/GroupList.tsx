import React, { useEffect, useRef, useState } from "react";
import BackButton from "../../components/common/BackButton/BackButton";
import GroupSearchInput from "../../components/Group/GroupSearchInput/GroupSearchInput";
import GroupUnJoinList from "../../components/Group/GroupUnJoinList/GroupUnJoinList";
import { getAllGroupAction } from "../../redux/modules/group";
import { useAppDispatch } from "../../redux/store.hooks";
import { SMain } from "./styles";
import ScrollToTopButton from "../../components/common/ScrollToTopButton/ScrollToTopButton";

const GroupList = () => {
  let isInitial = true;
  const dispatch = useAppDispatch();
  const [unJoinGroups, setUnJoinGroups] = useState([]);
  const top = useRef<any>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(getAllGroupAction());
      const filtered = res.payload.filter((item: any) => {
        return item.status !== 1;
      });
      setUnJoinGroups(filtered);
    };
    if (isInitial) {
      isInitial = false;
      fetchData();
    }
  }, [dispatch]);

  return (
    <SMain>
      <BackButton color="black" />
      <div className="search__wrappers">
        <GroupSearchInput setUnJoinGroups={setUnJoinGroups} />
      </div>
      <div
        className="grouplist__wrapper"
        onScroll={() => {
          console.log(top.current?.getBoundingClientRect().top);

          if (top.current?.getBoundingClientRect().top < -200) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        }}
      >
        {unJoinGroups.length ? (
          <GroupUnJoinList top={top} groupData={unJoinGroups} />
        ) : (
          <div>조건에 맞는 그룹이 존재하지 않습니다😥</div>
        )}
      </div>
      <ScrollToTopButton target={top} active={isActive} />
    </SMain>
  );
};

export default GroupList;

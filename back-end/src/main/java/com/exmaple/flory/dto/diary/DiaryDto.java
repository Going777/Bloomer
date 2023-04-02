package com.exmaple.flory.dto.diary;

import com.exmaple.flory.dto.comment.CommentResponseDto;
import com.exmaple.flory.dto.flower.FlowerEmotionDto;
import com.exmaple.flory.dto.garden.GardenDiaryDto;
import com.exmaple.flory.dto.team.TeamDto;
import com.exmaple.flory.entity.Diary;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisHash;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
@RedisHash("post")
public class DiaryDto implements Serializable {
    private Long id;

    private String content;

    private String imgSrc;

    private double lat;

    private double lng;

    private String publicStatus;

    private String x;

    private String y;

    private String z;

    private String address;

    private Date createdTime;

    private GardenDiaryDto garden;

    private FlowerEmotionDto flowerEmotion;

    private List<TeamDto> groupList;

    private String musicTitle;

    private List<CommentResponseDto> commentList;

    public Diary toEntity(){
        return Diary.builder()
                .id(id).content(content).imgSrc(imgSrc).lat(lat).lng(lng).publicStatus(publicStatus).x(x).y(y).z(z).createdTime(createdTime)
                .address(address).build();
    }

}

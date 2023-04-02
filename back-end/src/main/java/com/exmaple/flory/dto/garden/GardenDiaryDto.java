package com.exmaple.flory.dto.garden;

import com.exmaple.flory.dto.member.MemberResponseDto;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class GardenDiaryDto implements Serializable {
    private Long id;

    private LocalDateTime deadLine;

    private MemberResponseDto member;

    private String musicTitle;

}

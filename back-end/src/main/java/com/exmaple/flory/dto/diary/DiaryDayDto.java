package com.exmaple.flory.dto.diary;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class DiaryDayDto implements Serializable {
    private String day;

    private List<DiaryDto> diaryList;
}

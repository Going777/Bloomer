package com.exmaple.flory.dto.flower;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Slf4j
public class FlowerEmotionDto implements Serializable {
    private Long fid;

    private Long eid;

    private String flowerName;

    private String language;

    private String largeCategory;

    private String smallCategory;
}

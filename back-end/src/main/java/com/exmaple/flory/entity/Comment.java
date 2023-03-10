package com.exmaple.flory.entity;

import com.exmaple.flory.dto.comment.CommentDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;

@Entity(name="comment")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Builder
@ToString
@DynamicUpdate //Update 시에 변경된 필드만 대응
@Slf4j
public class Comment {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content")
    private String content;

    @Column(name = "created_time")
    @CreationTimestamp
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdTime;

    @ManyToOne
    @JoinColumn(name = "did")
    private Diary diary;

    @ManyToOne
    @JoinColumn(name = "uid")
    private Member member;

    public CommentDto toDto(){
        return CommentDto.builder()
                .id(id).content(content).createdTime(createdTime).did(diary.getId()).uid(member.getUserId()).diary(diary).member(member).build();
    }

}
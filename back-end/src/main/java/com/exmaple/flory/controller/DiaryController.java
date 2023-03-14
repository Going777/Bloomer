package com.exmaple.flory.controller;

import com.exmaple.flory.dto.diary.DiaryDto;
import com.exmaple.flory.dto.diary.DiaryRequestDto;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.response.ErrorResponse;
import com.exmaple.flory.response.SuccessResponse;
import com.exmaple.flory.service.DiaryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/diary")
@Slf4j
public class DiaryController {
    @Autowired
    DiaryService diaryService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody DiaryRequestDto diaryDto){
        try{
            DiaryDto result = diaryService.insertDiary(diaryDto);

            log.info("Diary 생성: {}",diaryDto);
            return new ResponseEntity<>(new SuccessResponse(result), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{diaryId}")
    public ResponseEntity<?> getDiary(@PathVariable Long diaryId){
        try{
            DiaryDto diaryDto = diaryService.getDiary(diaryId);

            log.info("Diary 가져오기: {}",diaryDto);
            return new ResponseEntity<>(new SuccessResponse(diaryDto),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{diaryId}")
    public ResponseEntity<?> deleteDiary(@PathVariable Long diaryId){
        try{
            int result = diaryService.deleteDiary(diaryId);

            log.info("diary 삭제: {}",diaryId);
            if(result==1) return new ResponseEntity<>(new SuccessResponse("삭제가 완료되었습니다."),HttpStatus.OK);
            else throw new Exception();
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateDiary(@RequestBody DiaryRequestDto diaryDto){
        try{
            DiaryDto result = diaryService.updateDiary(diaryDto);
            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/list/{gardenId}/{requestId}")
    public ResponseEntity<?> getDiaryListGarden(@PathVariable Long gardenId, @PathVariable Long requestId){
        try{
            List<DiaryDto> result = diaryService.getDiaryListByGarden(gardenId, requestId);
            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/diary-list/{memberId}/{requestId}")
    public ResponseEntity<?> getDiaryListUser(@PathVariable Long memberId, @PathVariable Long requestId){
        try{
            List<DiaryDto> result = diaryService.getDiaryListByUser(memberId, requestId);
            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/map")
    public ResponseEntity<?> getDiaryListInMap(@RequestBody Map<String,String> mapInfo){
        try {
            List<DiaryDto> result = diaryService.getDiaryListInMap(mapInfo);
            return new ResponseEntity<>(new SuccessResponse(result),HttpStatus.OK);
        } catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/location")
    public ResponseEntity<?> getDiaryByLocation(@RequestBody Map<String,String> info){
        try{
            DiaryDto diaryDto = diaryService.getDiaryByLocation(info);
            return new ResponseEntity<>(new SuccessResponse(diaryDto),HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(new ErrorResponse(ErrorCode.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
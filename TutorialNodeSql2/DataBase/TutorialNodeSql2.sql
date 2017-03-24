
USE [TutorialNodeSql2]

CREATE TABLE LevelUser(
	LevelId BIGINT IDENTITY(1,1),
	LevelName VARCHAR(200)
	PRIMARY KEY(LevelId)
)
GO
CREATE TABLE [User](
	UserId BIGINT IDENTITY(1,1),
    UserName VARCHAR(200),
    UserEmail VARCHAR(200),
    UserPassword VARCHAR(10),
    UserLevelId BIGINT ,
    UserStatus BIT null
	PRIMARY KEY(UserId)
	CONSTRAINT FK_User_Level
	FOREIGN KEY(UserLevelId)
	REFERENCES LevelUser(LevelId)
)
;
GO
CREATE PROCEDURE ValidateLogin
(
    @UserEmail VARCHAR(200),
    @UserPassword VARCHAR(10)
)
AS
BEGIN
	SELECT 
		UserId,
		UserName,
		UserEmail,
		UserLevelId,
		UserStatus
	FROM 
		[User]
	WHERE
		@UserEmail = @UserEmail
		AND  @UserPassword = @UserPassword
END

GO
CREATE PROCEDURE NewUser
(
	@UserId BIGINT OUTPUT,
    @UserName VARCHAR(200),
    @UserEmail VARCHAR(200),
    @UserPassword VARCHAR(10),
    @UserLevelId BIGINT 
)
AS
BEGIN
	
	INSERT INTO [User](UserName, UserEmail,UserPassword,UserLevelId)
	VALUES(@UserName, @UserEmail,@UserPassword,@UserLevelId);
	SET @UserId = @@IDENTITY;
END
GO

GO
CREATE PROCEDURE GetLevelUser
AS
BEGIN
	SELECT 
		LevelId,
		LevelName
	FROM 
		[LevelUser]
END

--INSERT INTO [LevelUser](LevelName)
--VALUES('User'),
--('Manager'),
--('Director');

GO
CREATE PROCEDURE GetUsers
(@De INT ,@Para INT)
AS
BEGIN

	SELECT 
		Result.UserId,
		Result.UserName,
		Result.UserEmail,
		Result.UserLevelId,
		Result.UserStatus,
		Result.LevelName
	FROM
	(
		SELECT 
			U.UserId,
			U.UserName,
			U.UserEmail,
			U.UserLevelId,
			U.UserStatus,
			LU.LevelName,
			row_number() over(order by U.UserId ) AS [Index]
		FROM 
			[User] U INNER JOIN [LevelUser] LU 
			ON U.UserLevelId = LU.LevelId
	) Result
	WHERE 
		Result.[Index] >= @De AND Result.[Index] <= @Para;

END
